import Sequelize, { Model } from "sequelize";

class Rent extends Model {
  static init(sequelize) {
    super.init(
      {
        devolution_date: Sequelize.DATE
      },
      { sequelize }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: "user_id", as: "user" });
    this.belongsTo(models.Book, { foreignKey: "book_id", as: "book" });
  }
}

export default Rent;
