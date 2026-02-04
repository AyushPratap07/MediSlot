# 🏥 MediSlot – Doctor Appointment Booking System

MediSlot is a **full-stack MERN healthcare web application** that allows patients to book doctor appointments online, while providing dedicated dashboards for **Admin** and **Doctors** to manage profiles, appointments, and schedules efficiently.

This project is built with scalability, security, and real-world workflows in mind.

---

## 🚀 Live Features

### 👤 Patient
- User authentication (Register / Login)
- Browse doctors by specialty
- View doctor profiles
- Book appointments
- Appointment history

### 🩺 Doctor
- Doctor authentication
- View assigned appointments
- Manage availability slots
- Profile details & image stored securely on Cloudinary

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
- Razorpay (Test Mode – Planned)
- Vercel (Frontend Deployment – Planned)
- Render / Railway (Backend Deployment – Planned)

---

## 📂 Project Structure
MediSlot/ │
 ├── client/        # Patient & Doctor Frontend (React) 
 ├── admin/         # Admin Dashboard (React) 
 ├── server/        # Backend (Node + Express) │ 
 ├── .gitignore 
 ├── README.md 
       └── .env.example

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

## 📈 Future Enhancements
Razorpay payment integration (Test Dashboard)
Appointment reminders (Email / SMS)
Doctor profile editing from dashboard
Role-based access control
Admin analytics charts
Deployment with CI/CD

## 🧠 Learning Outcomes
Real-world MERN architecture
Secure authentication & authorization
Cloudinary integration
Admin-Doctor-Patient role separation
Production-ready folder structure
Git & GitHub best practices

## 👨‍💻 Author
Ayush Pratap Singh

Full-Stack Developer

GitHub: https://github.com/AyushPratap07

---

⭐ If you like this project

Give it a ⭐ on GitHub — it really helps!