import { Router } from "express";
import UserController from "./app/controllers/UserController";
import SessionController from "./app/controllers/SessionController";

const routes = new Router();

routes.post("/users", UserController.store);
routes.put("/users/:id", UserController.update);
routes.delete("/users/:id", UserController.delete);
routes.get("/users/:id", UserController.index);

routes.post("/sessions", SessionController.store);

export default routes;
