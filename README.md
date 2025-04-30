# Cleaning Service Management System Backend (Node.js + Express + Sequelize)

This is a backend RESTful API built using **Node.js**, **Express**, and **Sequelize** to manage bookings, services, and users. The API is intended to work with a frontend (like a Next.js dashboard) and supports typical CRUD operations with JSON-based communication.

## Features

- User authentication
- Booking creation, retrieval, updating, and deletion
- Service management (creation, and retrieval)
- Password Hashing for protection
- Modular routing for `users`, `bookings`, and `services`
- CORS-enabled for frontend integration
- Sequelize ORM for relational database operations


## Tech Stack

- **Backend:** Node.js, Express
- **Database ORM:** Sequelize
- **Database:** SQLite3
- **Security:** Password hashing with `bcrypt`
- **Middleware:** `cors`, `body-parser`


## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/faizansafwan/cleaning-service.git
cd cleaning-service
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the Server 

Type the below command for run the server

```bash
nodemon server.js 
# or
npm run dev
```

Server starts at: http://localhost:5000


## API Endpoints 

User Routes (/user)

POST /register – Register a new user (password will be hashed)
POST /login – Login with username/password and receive a JWT token


Booking Routes (/booking)

GET / – Fetch all bookings
POST / – Create a new booking
PUT /:id – Update booking by ID
DELETE /:id – Delete booking by ID


Service Routes (/service)

GET / – List all services
POST / – Add a new service


## Testing

Base URL: http://localhost:5000
Authorization: Bearer <token> (if required)
Content-Type: application/json


