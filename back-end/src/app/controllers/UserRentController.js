import { addDays, endOfToday } from "date-fns";

import Rent from "../models/Rent";
import Book from "../models/Book";
import User from "../models/User";

class UserRentController {
  async store(req, res) {
    const { bookId } = req.params;
    const { userId } = req;

    const book = await Book.findByPk(bookId);
    if (!book) {
      return res.status(400).json({ error: "Book not found" });
    }

    const { stock } = book;
    if (stock < 1) {
      return res.status(400).json({ error: "Book is not available" });
    }

    const rent = await Rent.findOne({
      where: {
        user_id: userId,
        book_id: bookId
      }
    });
    if (rent) {
      return res
        .status(400)
        .json({ error: "User's already renting this book" });
    }

    book.update({ stock: stock - 1 });

    const devolutionDate = addDays(endOfToday(), 7);

    const newRent = await Rent.create({
      devolution_date: devolutionDate,
      user_id: userId,
      book_id: bookId
    });

    return res.json(newRent);
  }

  async index(req, res) {
    const { userId } = req;

    const userRents = await Rent.findAll({
      where: {
        user_id: userId
      },
      include: [
        { model: User, as: "user", attributes: ["name", "email"] },
        {
          model: Book,
          as: "book",
          attributes: ["id", "name", "price", "img_url"]
        }
      ]
    });

    return res.json(userRents);
  }
}

export default new UserRentController();
