# BookyRents Front-end
## How to run
Make sure to set all the .env variables and to have npm/yarn installed.

### `yarn` or `npm i`
to install all dependencies, then
### `yarn start` or `npm run start`
to run it. Of course, the api must be running for its full functionality.

## Stack
### React
So yeah, the project's stack is react so we can do the react-challenge, right? The project uses all the well known dependecies to do some functionalities, like Axios and Redux.

## What it does
The user must login to use the app properly. At main page, he can see all books that were added. On the top of the screen, he can select which page he would like to go. If he is signed as an Admin (field "admin" at "users" column), he'll also see a button to access the "Add Book" page. 

## Possible Improvements
### Design
The design sucks, right?. I'm kinda bad at it, and not having a wireframe of the project and much time made things a bit more difficult.
### Error Handling
If on one side the api handle some errors, on the other the front handles almost nothing. I really wanted to implement Toastify and put some error messages, though.
### Better Control With the Book Renting
When a user rents a book, the devolution date will be in seven days, period. That's awful. Also, when a user has a reservation, the book automatically becomes "rented" by this user when it becomes available. The user could never know, that's also awful.
