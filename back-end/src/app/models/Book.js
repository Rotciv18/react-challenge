import Sequelize, { Model } from "sequelize";

class Book extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        description: Sequelize.STRING,
        stock: Sequelize.INTEGER,
        img_url: Sequelize.STRING,
        price: Sequelize.FLOAT
      },
      { sequelize }
    );

    this.addHook("beforeSave", async book => {
      if (!book.img_url) {
        book.img_url = "unavailable";
      }
    });

    return this;
  }
}

export default Book;
