import * as Yup from "yup";
import Book from "../models/Book";

class BookController {
  async update(req, res) {
    // Only the stock should be able to be updated due to rents
    const schema = Yup.object().shape({
      stock: Yup.number().required()
    });
    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: "Validation fails" });
    }

    const { id } = req.params;
    const { stock } = req.body;

    const book = await Book.findByPk(id);

    if (!book) {
      return res.status(400).json({ error: "Book does not exist" });
    }

    if (stock < 0) {
      return res
        .status(400)
        .json({ error: "Book Stock should not be negative" });
    }

    const newBook = await book.update({ stock });

    return res.status(200).json(newBook);
  }

  async delete(req, res) {
    const { id } = req.params;

    const book = await Book.findByPk(id);

    if (!book) {
      return res.status(400).json({ error: "Book does not exist" });
    }

    return res.json(await book.destroy());
  }

  async index(req, res) {
    const { id } = req.params;

    const book = await Book.findByPk(id);

    if (!book) {
      return res.status(400).json({ error: "Book does not exist" });
    }

    return res.json(book);
  }
}

export default new BookController();
