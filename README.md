# CRUD Todo App

This is a simple CRUD (Create, Read, Update, Delete) todo application built with React, Express.js, MySQL, and Redis. The application allows to add todo items by performing basic CRUD operations.

## Technologies Used

- React: A JavaScript library for building user interfaces.
- Express.js: A web application framework for Node.js.
- MySQL: A popular relational database management system.
- Redis: An in-memory data store used for caching.
- Docker: A containerization platform for easy deployment and scalability.

## Features

- Create a new todo item.
- Read and display a list of todo items.
- Update an existing todo item.
- Delete a todo item.
- Caching with Redis for improved performance.

## Getting Started

### Prerequisites

- Docker: Install Docker on your machine (https://www.docker.com/get-started).
- Node.js: Make sure that your machine contains Node.js. About Node.js (https://nodejs.org)

### Installation

1. Clone the repository:
   git clone (https://github.com/ShrikantaMazumder/react-redis-nodejs-crud.git)

2. Navigate to the project directory:

3. make. env file and copy variables from .env.example. After that update variable values.

4. Build and run the Docker containers:
   `docker-compose up --build`

5. Access the endpoints from.
   Here are the lists of endpoints
    - `GET - http://localhost:5001/api/v1/todos (get all todos)`
    - `POST - http://localhost:5001/api/v1/todo (create new item) (url encoded)`
    - `DELETE - http://localhost:5001/api/v1/todo/:id (delete item)`
    - `PUT - http://localhost:5001/api/v1/todo/:id (update item) (url encoded)`
    - `GET - http://localhost:5001/api/v1/todo/:id (get single todo item)`

- Frontend application will be accessible by `http://localhost:3000`

## License

This project is licensed under the [MIT License](LICENSE).
