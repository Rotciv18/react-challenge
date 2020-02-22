import { Router } from "express";
import UserController from "./app/controllers/UserController";
import SessionController from "./app/controllers/SessionController";
import BookController from "./app/controllers/BookController";

const routes = new Router();

routes.post("/users", UserController.store);
routes.put("/users/:id", UserController.update);
routes.delete("/users/:id", UserController.delete);
routes.get("/users/:id", UserController.index);

routes.post("/sessions", SessionController.store);

routes.post("/books", BookController.store);

export default routes;
