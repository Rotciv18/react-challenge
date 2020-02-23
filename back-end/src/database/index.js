import Sequelize from "sequelize";

import User from "../app/models/User";
import Book from "../app/models/Book";
import Rent from "../app/models/Rent";
import Reservation from "../app/models/Reservation";

import databaseConfig from "../config/database";

const models = [User, Book, Rent, Reservation];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }
}

export default new Database();
