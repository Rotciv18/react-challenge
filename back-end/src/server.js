import app from './app';

try {
  app.listen(3333);
  console.log("Server listening to port: 3333");
}
catch (e) {
  console.log("Could not start server.");
}
