import mongoose from "mongoose";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import doctorModel from "../models/doctorModel.js";

dotenv.config();

const doctors = [
  {
    name: "Dr. Anjali Verma",
    email: "anjali.cardio@medislot.com",
    password: "Cardio@1234",
    image: "https://res.cloudinary.com/ditk8xbpv/image/upload/v1769958294/doc13_qxeeup.png",
    speciality: "Cardiologist",
    degree: "MBBS, MD (Cardiology)",
    experience: "10 Years",
    about: "Specialist in heart diseases, BP management, and preventive cardiology.",
    fees: 1000,
    address: { line1: "Indira Nagar", line2: "Lucknow, Uttar Pradesh" },
    date: Date.now(),
  },
  {
    name: "Dr. Abhinav Pratap Singh",
    email: "abhinav.ortho@medislot.com",
    password: "Ortho@1234",
    image: "https://res.cloudinary.com/ditk8xbpv/image/upload/v1769958294/doc3_xkzpsg.png",
    speciality: "Orthopedic",
    degree: "MBBS, MS (Orthopedics)",
    experience: "7 Years",
    about: "Treats joint pain, fractures, arthritis, and sports injuries.",
    fees: 700,
    address: { line1: "Alambagh", line2: "Lucknow, Uttar Pradesh" },
    date: Date.now(),
  },
  {
    name: "Dr. Neha Sharma",
    email: "neha.pedia@medislot.com",
    password: "Pedia@1234",
    image: "https://res.cloudinary.com/ditk8xbpv/image/upload/v1769958296/doc11_or9hyo.png",
    speciality: "Pediatrician",
    degree: "MBBS, MD (Pediatrics)",
    experience: "6 Years",
    about: "Child health specialist focusing on growth and immunization.",
    fees: 600,
    address: { line1: "Gomti Nagar", line2: "Lucknow, Uttar Pradesh" },
    date: Date.now(),
  },
  {
    name: "Dr. Arjun Malhotra",
    email: "arjun.psy@medislot.com",
    password: "Psy@1234",
    image: "https://res.cloudinary.com/ditk8xbpv/image/upload/v1769958296/doc10_ghj0u0.png",
    speciality: "Psychiatrist",
    degree: "MBBS, MD (Psychiatry)",
    experience: "9 Years",
    about: "Mental health expert for anxiety, depression, and sleep disorders.",
    fees: 900,
    address: { line1: "Aliganj", line2: "Lucknow, Uttar Pradesh" },
    date: Date.now(),
  },
  {
    name: "Dr. Suresh Gupta",
    email: "suresh.ent@medislot.com",
    password: "ENT@1234",
    image: "https://res.cloudinary.com/ditk8xbpv/image/upload/v1769958294/doc6_mh5607.png",
    speciality: "ENT",
    degree: "MBBS, MS (ENT)",
    experience: "11 Years",
    about: "ENT specialist treating sinus, hearing loss, and throat disorders.",
    fees: 650,
    address: { line1: "Charbagh", line2: "Lucknow, Uttar Pradesh" },
    date: Date.now(),
  },
  {
    name: "Dr. Kavita Joshi",
    email: "kavita.gyn@medislot.com",
    password: "Gyn@1234",
    image: "https://res.cloudinary.com/ditk8xbpv/image/upload/v1769958296/doc9_trpor7.png",
    speciality: "Gynecologist",
    degree: "MBBS, MS (Gynecology)",
    experience: "12 Years",
    about: "Women’s health specialist for pregnancy and reproductive care.",
    fees: 900,
    address: { line1: "Mahanagar", line2: "Lucknow, Uttar Pradesh" },
    date: Date.now(),
  },
  {
    name: "Dr. Rohit Agarwal",
    email: "rohit.derma@medislot.com",
    password: "Skin@1234",
    image: "https://res.cloudinary.com/ditk8xbpv/image/upload/v1769958294/doc12_cjyujg.png",
    speciality: "Dermatologist",
    degree: "MBBS, MD (Dermatology)",
    experience: "5 Years",
    about: "Treats acne, hair loss, eczema, and skin allergies.",
    fees: 700,
    address: { line1: "Rajajipuram", line2: "Lucknow, Uttar Pradesh" },
    date: Date.now(),
  },
  {
    name: "Dr. Pankaj Mishra",
    email: "pankaj.general@medislot.com",
    password: "General@1234",
    image: "https://res.cloudinary.com/ditk8xbpv/image/upload/v1769958294/doc14_waxkbo.png",
    speciality: "General Physician",
    degree: "MBBS",
    experience: "15 Years",
    about: "General physician treating fever, diabetes, BP, and infections.",
    fees: 500,
    address: { line1: "Aminabad", line2: "Lucknow, Uttar Pradesh" },
    date: Date.now(),
  },
  {
    name: "Dr. Aryan Pratap",
    email: "aryan.dental@medislot.com",
    password: "Dental@1234",
    image: "https://res.cloudinary.com/ditk8xbpv/image/upload/v1769958295/doc8_yofzur.png",
    speciality: "Dentist",
    degree: "BDS, MDS",
    experience: "6 Years",
    about: "Dental surgeon specializing in root canal and cosmetic dentistry.",
    fees: 550,
    address: { line1: "Chowk", line2: "Lucknow, Uttar Pradesh" },
    date: Date.now(),
  },
];

const seedDoctors = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected");

    let added = 0;
    let skipped = 0;

    for (const doc of doctors) {
      const exists = await doctorModel.findOne({ email: doc.email });

      if (exists) {
        console.log(`Skipped (exists): ${doc.email}`);
        skipped++;
        continue;
      }

      const hashedPassword = await bcrypt.hash(doc.password, 10);

      await doctorModel.create({
        ...doc,
        password: hashedPassword,
      });

      console.log(`Added: ${doc.name}`);
      added++;
    }

    console.log("––––––––––––––––––––––");
    console.log(`Doctors added: ${added}`);
    console.log(`Doctors skipped: ${skipped}`);
    console.log("Seeding completed safely ✅");

    process.exit();
  } catch (error) {
    console.error("Seeding failed ❌", error);
    process.exit(1);
  }
};

seedDoctors();
