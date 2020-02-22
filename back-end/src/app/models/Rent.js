import Sequelize, { Model } from "sequelize";

class Rent extends Model {
  static init(sequelize) {
    super.init(
      {
        devolution_date: Sequelize.DATE
      },
      sequelize
    );

    return this;
  }
}

export default Rent;
