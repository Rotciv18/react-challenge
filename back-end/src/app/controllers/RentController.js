import Rent from "../models/Rent";
import Book from "../models/Book";
import User from "../models/User";

class RentController {
  async index(req, res) {
    const { rentId } = req.params;

    const rent = await Rent.findOne({
      where: { id: rentId },
      include: [
        { model: User, as: "user", attributes: ["name", "email"] },
        {
          model: Book,
          as: "book",
          attributes: ["id", "name", "price", "img_url"]
        }
      ]
    });
    if (!rent) {
      return res.status(400).json({ error: "Rent not found" });
    }

    return res.json(rent);
  }

  async delete(req, res) {
    const { rentId } = req.params;

    const rent = await Rent.findByPk(rentId);
    if (!rent) {
      return res.status(400).json({ error: "Rent not found" });
    }

    const book = await Book.findByPk(rent.book_id);

    const { stock } = book;
    await book.update({ stock: stock + 1 });

    return res.json(await rent.destroy());
  }
}

export default new RentController();
