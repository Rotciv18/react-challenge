# BookyRents Back-End App
## How to run
Be sure to fill all the .env variables so the app can run properly. Please keep in mind that the database must be created first.</br>
Be also sure to have npm running properly on shell. yarn would be awesome. </br>

#### Yarn
To install all dependencies, run: </br>
$ yarn </br>
then, to start the application: </br>
$ yarn dev </br>
The app should start properly on port 3333.
#### npm
Almost same for yarn: </br>
$ npm i </br>
$ npm run dev

## Stack
### Node
Well I used node since I am more confortable with it than with Spring. Spring is also awesome but I haven't been using it for months.

### Database
I used PostgreSQL, running with docker. ... not much to say about it :c

### Authentication
So yeah the app requires that the user sign in. I'm currently using JsonWebToken, so a generated token will be used to grant access to almost every single request to the api.

### Requests
There are WAY TOO MANY requests, I'm really sorry. I didn't have too much time to focus on the project, so I didn't plan anything before starting it. So, instead of implementing only what I thought it would be useful only to the front-end, I decided to implement almost every possible request for all the models. Half of them are useless now. At least I had fun.

