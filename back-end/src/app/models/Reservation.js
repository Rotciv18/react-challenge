import { Model } from "sequelize";

class Reservation extends Model {
  static init(sequelize) {
    super.init({}, { sequelize });

    return this;
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: "user_id", as: "user" });
    this.belongsTo(models.Book, { foreignKey: "book_id", as: "book" });
  }
}

export default Reservation;
