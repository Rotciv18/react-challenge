module.exports = {
  dialect: 'postgres',
  host: '192.168.99.100',
  port: '5430',
  username: 'postgres',
  password: 'docker',
  database: 'bookyrents',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  }
};
