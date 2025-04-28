
# Blog Platform with Role-Based Access Control (RBAC)

This is a full-stack Blog Platform project implementing secure **Role-Based Access Control (RBAC)** using **Node.js**, **Express.js**, **React.js**, and **PostgreSQL**.  
It includes authentication, role-based authorization, and basic CRUD operations for blog posts.

---

## Features

- User authentication using JWT
- Role-based authorization (admin and user roles)
- Admin dashboard for blog management (create, update, delete posts)
- Secure password storage using bcrypt
- PostgreSQL database with automatic table creation if not present
- Protected API endpoints with Express middleware
- Clean, simple frontend with React

---

## Tech Stack

- Backend: Node.js, Express.js, JWT, Bcrypt, PostgreSQL
- Frontend: React.js, Axios
- Database: PostgreSQL (Aiven)

---

## Folder Structure

```
blog-platform-rbac/
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   ├── app.js
│   ├── server.js
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.js
│   │   ├── index.js
│   ├── public/
│   └── package.json
├── README.md
```

---

## Getting Started

Follow these steps to run the project locally:

### 1. Clone the repository

```bash
git clone https://github.com/Moinuddin0677/blog-platform-rbac.git
cd blog-platform-rbac
```

### 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file inside the backend folder:

```
DATABASE_URL=your_postgresql_connection_url
JWT_SECRET=your_jwt_secret_key
```

Then start the backend server:

```bash
npm start
```

The backend will run by default on `http://localhost:5000`.

### 3. Frontend Setup

Open another terminal:

```bash
cd frontend
npm install
npm start
```

The React app will start on `http://localhost:3000`.

---

## Environment Variables

Backend `.env` file should have:

```
DATABASE_URL=your_aiven_postgresql_url
JWT_SECRET=your_secret_key_for_jwt
```

---

## Notes

- When the backend starts, it will automatically create the `users` and `blogs` tables if they do not exist.
- Admin role users can create, edit, and delete blog posts.
- Regular users can only view blog posts.

---

## License

This project is licensed for educational and personal use.
