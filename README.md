# 🏥 MediSlot – Doctor Appointment Booking System

MediSlot is a **full-stack MERN healthcare web application** that allows users to **find doctors, book appointments, and make online payments**, while providing **admin and doctor dashboards** for managing schedules, profiles, and appointments.

This project is built with scalability, security, and real-world workflows in mind.

---

## 🌐 Live Demo

### Frontend (Vercel):

👉 https://medi-slot-five.vercel.app

### Backend API (Render):

👉 https://medislot-3net.onrender.com

⚠️ Render free instances may take 30–50 seconds to wake up after inactivity.

---

## 🚀 Live Features

### 👤 Patient
- User authentication (JWT)
- Browse doctors by specialty
- View doctor profiles & availability
- Book appointments
- Online payment using Razorpay (Test Mode)
- View appointment history
- Cancel appointments

### 🩺 Doctor
- Doctor login
- Profile management
- View scheduled appointments
- Appointment status tracking

### 🛠 Admin
- Secure admin login
- Add doctors with profile images
- View all doctors & patients
- Manage appointments
- Admin dashboard analytics

---

## 🧱 Tech Stack

### Frontend
- React (Vite)
- Tailwind CSS
- Axios
- React Router DOM
- Razorpay Checkout

### Backend
- Node.js
- Express.js
- MongoDB (Atlas)
- Mongoose
- JWT Authentication
- bcrypt.js

### Cloud & Services
- Cloudinary (Image Storage)
- MongoDB Atlas
- Razorpay (Test Mode)
- Vercel (Frontend Deployment)
- Render (Backend Deployment)

---

## 🧩 System Architecture

![MediSlot System Architecture](assets/system-architecture.png)

MediSlot follows a client–server architecture with clearly separated frontend and backend services, deployed independently for scalability and maintainability.

---

## 📂 Project Structure

```env
MediSlot/
│
├── client/          # React frontend
│   ├── src/
│   ├── public/
│   └── vite.config.js
│
├── server/          # Node + Express backend
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   ├── middlewares/
│   └── index.js
│
├── admin/           # Admin panel
│
├── .gitignore
└── README.md

 ```  

---

## 🔐 Environment Variables

Environment variables are **not committed** for security reasons.

Create a `.env` file inside the `server` folder using this template:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

ADMIN_EMAIL=admin@example.com
ADMIN_PASSWORD=admin123

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```
---

## 🧪 Local Setup Instructions

### 1️⃣ Clone the Repository
  git clone https://github.com/AyushPratap07/MediSlot.git

  cd MediSlot

### 2️⃣ Backend Setup
  cd server

  npm install

  npm run dev

### 3️⃣ Client Setup
  cd client

  npm install

  npm run dev

### 4️⃣ Admin Panel Setup
  cd admin

  npm install

  npm run dev

---

## 🖼 Image Handling
All doctor profile images are stored securely using Cloudinary

Images are uploaded via backend and stored as URLs

No images are stored directly on the server

## 🌱 Database Seeding
Doctors are seeded using a custom seeder script

Existing doctors are preserved

Images can be updated by re-running the seeder with new image URLs

## 🔒 Security Highlights
Password hashing using bcrypt

JWT-based authentication

Protected routes for Admin & Doctor

Environment variables hidden from repository

## 💳 Payment Integration (Razorpay)
Razorpay is integrated in test mode

Orders are created on backend

Payments verified server-side

Appointment marked as paid after verification

## 🧠 Learning Outcomes
Real-world MERN architecture

Secure authentication & authorization

Cloudinary integration

Admin-Doctor-Patient role separation

Production-ready folder structure

Git & GitHub best practices

Payment Integration

---

## 📄 License

This project is for educational and portfolio purposes.

---

## 👨‍💻 Author
Ayush Pratap Singh

Full-Stack Developer

GitHub: https://github.com/AyushPratap07

---

⭐ If you like this project

Give it a ⭐ on GitHub — it really helps!