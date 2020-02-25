# BookyRents Back-end App

## How to Run
You must have node and npm installed. 
#### npm
At the app directory, run the following commands: <br />
##### $ npm install
##### $ npm run dev
But you'll preferably use yarn:
#### Yarn
At the app directory, run the following commands: <br />
##### $ yarn
##### $ yarn dev
Server will start running at port: 3333. Please keep in mind that some params such as DB configs must be set.

## Specifications
I used Node.js, since I feel more confident of what I am doing with it than with Spring. Spring is also awesome but I haven't used it for a long time.
<br />
### Routes
There are WAY too many routes. Since I had little time to focus on the project, everything was made without any early documentation. So, instead of making only the routes I would use in the Front-end, I ended up adding a lot of endpoints so I wouldn't need to go back there and add more.<br />
So basically there are almost 4 http call for every model, with some little exceptions.
<br />
### Authentication
To use the app, the user must be signed in. So I'm using JsonWebToken to keep user's session. For almost all requisitions, the app must receive an auth token (Bearer token) to do what was asked to.

### Database
For database, I 
