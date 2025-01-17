import Reservation from "../models/Reservation";
import Book from "../models/Book";
import User from "../models/User";

class ReservationController {
  async store(req, res) {
    const { userId } = req;
    const { bookId } = req.params;

    const book = await Book.findByPk(bookId);
    if (!book) {
      return res.status(400).json({ error: "Book not found" });
    }

    return res.json(
      await Reservation.create({
        user_id: userId,
        book_id: bookId
      })
    );
  }

  async delete(req, res) {
    const reservation = await Reservation.findByPk(req.params.reservationId);

    if (!reservation) {
      return res.status(400).json({ error: "Reservation not found" });
    }

    return res.json(await reservation.destroy());
  }

  async index(req, res) {
    const reservations = await Reservation.findAll({
      where: { user_id: req.userId },
      include: [
        { model: User, as: "user", attributes: ["name", "email"] },
        {
          model: Book,
          as: "book",
          attributes: ["id", "name", "price", "img_url"]
        }
      ]
    });

    return res.json(reservations);
  }
}

export default new ReservationController();
