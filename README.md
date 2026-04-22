# CST 218 – Semester Project

## Author
Charly Laplow

## Project Description

This project is an API intended to house a list of all user's assignments and their completion status.
The application allows users to register, log in, manage school assignments and classes.

## Feature List

- User registration and login
- Login verification to protect user content
- Create, modify/update, delete a list of user's classes and assignments
- View all or view specific classes or assignments by ID

## Tech Stack

- Node.js
- Express.js
- MongoDB (Mongoose)
- JSON Web Tokens (JWT)
- bcrypt (password hashing)

### Installation Instructions

1. Clone the repository
2. Navigate into the project folder
3. Install dependencies using: npm install
4. Make a '.env' file with environment variables 'MONGO_URI' and 'JWT_SECRET' inside it.
5. Start the server using: node server.js
6. Open Thunder Client or Postman to test API routes.

### Example Endpoints

### User Routes

Register a new user:
POST /users/register 

Login an existing user:
POST /users/login 

### Class Routes

Create a new class post:
POST /myClass

Retrieve all classes:
Get /myClass

Retrieve a single class by ID:
GET /myClass/:id

Update a specific class by ID:
GET /myClass/:id 

Update a specific class by ID:
PUT /myClass/:id 

### Assignment Routes

Create a new assignment:
POST /assignments 

Retrieve all assignments:
GET /assignments 

Retrieve a single assignment by ID:
GET /assignments/:id 

Update a specific assignment by ID:
PUT /assignments/:id 

Delete a specific assignment by ID:
DELETE /assignments/:id 

#### Future potential updates

Currently I plan to implement a UI and possibly add another feature.