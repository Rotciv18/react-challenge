import * as Yup from "yup";
import Book from "../models/Book";

class BookController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      description: Yup.string().required(),
      stock: Yup.number().required(),
      img_url: Yup.string()
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: "Validation fails" });
    }

    const { name } = req.body;

    const bookExists = await Book.findOne({ where: { name } });
    console.log(bookExists);
    if (bookExists) {
      const { stock } = bookExists;
      await bookExists.update({ stock: stock + 1 });
      return res.json(bookExists);
    }

    const newBook = await Book.create(req.body);
    return res.json(newBook);
  }
}

export default new BookController();
