import { Router } from "express";
import UserController from "./app/controllers/UserController";
import SessionController from "./app/controllers/SessionController";
import BooksController from "./app/controllers/BooksController";
import BookController from "./app/controllers/BookController";
import RentController from "./app/controllers/RentController";
import RentsController from "./app/controllers/RentsController";
import UserRentController from "./app/controllers/UserRentController";
import ReservationController from "./app/controllers/ReservationController";

import authMiddleware from "./app/middlewares/auth";
import adminAuthMiddleware from "./app/middlewares/adminAuth";

const routes = new Router();

routes.post("/sessions", SessionController.store);

routes.post("/users", UserController.store);

// Users should be logged in to be able to perform requisitions
routes.use(authMiddleware);

routes.put("/users/:id", UserController.update);
routes.delete("/users/:id", UserController.delete);
routes.get("/users/:id", UserController.index);

routes.get("/books", BooksController.index);

routes.get("/books/:id", BookController.index);
routes.put("/books/:id", BookController.update);

routes.post("/rent/:bookId", UserRentController.store);
routes.get("/rent", UserRentController.index);
routes.get("/rent/:rentId", RentController.index);
routes.delete("/rent/:rentId", RentController.delete);

routes.post("/reservation/:bookId", ReservationController.store);
routes.delete("/reservation/:reservationId", ReservationController.delete);
routes.get("/reservation", ReservationController.index);

routes.use(adminAuthMiddleware);

routes.post("/books", BooksController.store);

routes.delete("/books/:id", BookController.delete);

routes.get("/rent", RentsController.index);

export default routes;
