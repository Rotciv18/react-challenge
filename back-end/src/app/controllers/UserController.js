import * as Yup from "yup";
import User from "../models/User";

class UserController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string()
        .email()
        .required(),
      password: Yup.string()
        .required()
        .min(6),
      admin: Yup.bool().required()
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: "Validation fails" });
    }

    const userExists = await User.findOne({
      where: {
        email: req.body.email
      }
    });
    if (userExists) {
      return res.status(401).json({ error: "User already exists" });
    }

    const createdUser = await User.create(req.body);

    return res.json(createdUser);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      email: Yup.string().email(),
      oldPassword: Yup.string().min(6),
      password: Yup.string()
        .min(6)
        .when("oldPassword", (oldPassword, field) =>
          oldPassword ? field.required() : field
        ),
      confirmPassword: Yup.string().when("password", (password, field) =>
        password ? field.required().oneOf([Yup.ref("password")]) : field
      ),
      admin: Yup.bool()
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: "Validation fails" });
    }

    const { email, oldPassword, password } = req.body;

    const { id } = req.params;
    const user = await User.findByPk(id);

    /**
     * VALIDATIONS
     */
    // User
    if (!user) {
      return res.status(400).json({ error: "User does not exist" });
    }

    // New Email
    if (email && email !== user.email) {
      const userExists = await User.findOne({ where: { email } });
      if (userExists) {
        return res.status(400).json({ error: "Email already exists" });
      }
    }

    // New Password
    if (password && !(await user.checkPassword(oldPassword))) {
      return res.status(401).json({ error: "Password does not match" });
    }

    await user.update(req.body);

    return res.json(req.body);
  }

  async delete(req, res) {
    const { id } = req.params;

    const user = await User.findByPk(id);
    if (!user) {
      return res.status(400).json({ error: "User does not exist" });
    }

    return res.status(200).json(user.destroy());
  }

  async index(req, res) {
    const { id } = req.params;

    const user = await User.findByPk(id);
    if (!user) {
      return res.status(400).json({ error: "User does not exist" });
    }

    return res.json(user);
  }
}

export default new UserController();
