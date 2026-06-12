# 💎 AstroGem AI

## AI Powered Vedic Astrology and Gemstone Recommendation System

---

## Features

### User Features
- Registration and Login
- JWT Authentication
- Profile Management
- Generate Personalized Gemstone Recommendations
- Recommendation History
- Detailed Recommendation Page

### Admin Features
- Dashboard
- User Management
- User Consultations
- Analytics with Charts
- Recent Consultations

---

## Tech Stack

### Frontend
- React.js
- Vite
- Tailwind CSS
- Redux Toolkit
- Axios
- Recharts

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT

### API
- Vedic Astrology API

### AI
- Gemini AI

---

## Clone Repo

```bash
git clone https://github.com/BhavikKumar7/ASTROGEM-AI
```
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

## Charts

- Gemstone Recommendation Bar Chart
- Top Problems Bar Chart
- Monthly Consultation Trend Line Graph

---

## Future Improvements

- PDF Reports
- Kundli Generation
- Numerology Analysis
- Email Notifications
- Multi-language Support

---

# Author
### Bhavik Kumar
Computer Science and Engineering