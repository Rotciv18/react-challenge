module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn("books", "price", {
      type: Sequelize.FLOAT,
      allowNull: false
    });
  },

  down: queryInterface => {
    return queryInterface.removeColumn("books", "price");
  }
};
