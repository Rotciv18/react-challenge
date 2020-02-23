import { isBefore, endOfToday, addDays } from "date-fns";
import Rent from "../models/Rent";
import Book from "../models/Book";
import User from "../models/User";
import Reservation from "../models/Reservation";

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

    const reservations = await Reservation.findAll({
      where: { book_id: book.id }
    });

    if (reservations.length > 0) {
      let reservation;
      if (reservations.length > 1) {
        reservation = reservations.reduce((earliestReserv, reserv) => {
          return isBefore(earliestReserv, reserv) ? earliestReserv : reserv;
        });
      } else {
        [reservation] = reservations;
      }

      await rent.destroy();

      const devolutionDate = addDays(endOfToday(), 7);
      await Rent.create({
        devolution_date: devolutionDate,
        user_id: reservation.user_id,
        book_id: book.id
      });

      return res.json(await reservation.destroy());
    }

    // If there's no reservation~~
    const { stock } = book;
    await book.update({ stock: stock + 1 });

    return res.json(await rent.destroy());
  }
}

export default new RentController();
