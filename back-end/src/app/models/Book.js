import Sequelize, { Model } from "sequelize";

class Book extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        description: Sequelize.STRING,
        stock: Sequelize.INTEGER,
        img_url: Sequelize.STRING
      },
      { sequelize }
    );

    return this;
  }
}

export default Book;
