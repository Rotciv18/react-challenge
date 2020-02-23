import Rent from "../models/Rent";
import Book from "../models/Book";
import User from "../models/User";

class RentsController {
  async index(req, res) {
    const rents = await Rent.findAll({
      include: [
        { model: User, as: "user", attributes: ["name", "email"] },
        {
          model: Book,
          as: "book",
          attributes: ["id", "name", "price", "img_url"]
        }
      ]
    });

    return res.json(rents);
  }
}

export default new RentsController();
