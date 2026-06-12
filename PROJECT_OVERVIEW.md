# PROJECT_NOTES.md

# AstroGem AI
AI Powered Vedic Astrology and Gemstone Recommendation System

Author: Bhavik Kumar

---

# Overview
AstroGem AI is a full-stack MERN application that generates personalized gemstone recommendations using Vedic Astrology and Gemini AI.

---

# Tech Stack

Frontend
- React.js
- Vite
- Tailwind CSS
- Redux Toolkit
- Axios
- React Router DOM
- Recharts

Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcryptjs

AI
- Google Gemini API
- vedic-astrology-api

---

# Modules

Public Module
- Home Page
- Login
- Signup

User Module
- Dashboard
- Profile
- New Recommendation
- Recommendation History
- Recommendation Details

Admin Module
- Dashboard
- Users
- User Details
- User Consultations
- Analytics and Charts

---

# Authentication
- JWT Authentication
- Protected Routes
- Role Based Access Control
- USER and ADMIN roles

---

# Database Collections

User
- name
- dob
- birthTime
- birthLocation
- email
- password
- role

Consultation
- user
- problem
- vedicData
- recommendation

---

# APIs

### Auth
- POST /api/auth/register
- POST /api/auth/login
- POST /api/auth/logout

### Users
- GET /api/users/profile
- PUT /api/users/profile

### Recommendations
- POST /api/recommendations
- GET /api/recommendations
- GET /api/recommendations/:id
- DELETE /api/recommendations/:id

### Admin
- GET /api/admin/dashboard
- GET /api/admin/users
- GET /api/admin/users/:id
- GET /api/admin/users/:id/consultations
- DELETE /api/admin/users/:id
- DELETE /api/admin/users/:userId/consultations/:consultationId
- GET /api/admin/analytics

---

# Charts
- Gemstone Bar Chart
- Problem Bar Chart
- Monthly Consultation Line Chart

---

## Project Structure

```text
AstroGem AI
│
├── client
│   ├── public
│   ├── src
│   │   ├── app
│   │   ├── components
|   |   |     ├──user
|   |   |     └──admin
│   │   ├── layouts
│   │   ├── pages
|   |   |     ├──user
|   |   |     ├──public
|   |   |     └──admin
│   │   ├── redux
│   │   ├── services
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
├── server
│   ├── config
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── services
│   ├── utils
│   ├── app.js
│   ├── .env
│   └── server.js
│
├── .gitignore
└── README.md
```
---

# Future Improvements
- PDF Reports
- Kundli Generation
- Numerology
- Panchang
- Payment Gateway
- Email Notifications
- Dark Mode
- Multi-language Support
- Chat Assistant

---

# Important Packages
- react-router-dom
- redux-toolkit
- axios
- react-icons
- recharts
- express
- mongoose
- jsonwebtoken
- bcryptjs
- cors
- helmet
- cookie-parser
- morgan
- @google/generative-ai
- vedic-astrology-api

---

# Environment Variables
- PORT
- MONGO_URI
- JWT_SECRET
- GEMINI_API_KEY

---

## Start Backend

```bash
cd server
npm install
npm run dev
```

Create .env

```bash
PORT=5000
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
GEMINI_API_KEY=your_gemini_api_key
```

Backend runs on:

```text
http://localhost:5000
```

---

## Start Frontend

```bash
cd client
npm install
npm run dev
```

Frontend runs on:

```text
http://localhost:5173
```

---

## Admin Credentials
```bash
Email:
admin@astrogem.com

Password:
Admin@123
```
---

# Notes
All architecture, integration, and testing were performed manually.
AI was used as an assistive tool.