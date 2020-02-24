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
        book.img_url =
          "https://image.shutterstock.com/image-vector/link-unavailable-icon-website-suitable-600w-1110144383.jpg";
      }
    });

    return this;
  }
}

export default Book;
