import { Router } from "express";
import UserController from "./app/controllers/UserController";
import SessionController from "./app/controllers/SessionController";
import BooksController from "./app/controllers/BooksController";
import BookController from "./app/controllers/BookController";

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

routes.use(adminAuthMiddleware);

routes.post("/books", BooksController.store);
routes.delete("/books/:id", BookController.delete);

export default routes;
