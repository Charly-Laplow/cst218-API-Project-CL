# CST 218 – Semester Project

## Author
Charly Laplow

## Project Description

This project is intended to house a list of all user's assignments and their completion status.
The application allows users to register, log in, and manage school assignments.

## Installation Instructions

1. Clone the repository
2. Navigate into the project folder
3. Install dependencies using: npm install
4. Start the server using: node server.js
5. Open Thunder Client or Postman to test API routes.

### User Routes

Register a new user:
POST /users/register 

Login an existing user:
POST /users/login 

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