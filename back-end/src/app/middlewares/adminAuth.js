import User from "../models/User";

export default async (req, res, next) => {
  const id = req.userId;
  const user = await User.findByPk(id);

  if (user.admin) {
    req.userId = id;
    return next();
  }
  return res.status(401).json({ error: "Section for admins only" });
};
