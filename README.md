Feedback Collector App

This project is a simple full stack web application used to collect feedback from users.
Users can submit their name and message, and view all feedback entries.

Features

Add feedback (name and message)

View all submitted feedback

Simple and responsive interface

Technologies Used
Frontend: Next.js, Tailwind CSS, Axios
Backend: Node.js, Express.js, MongoDB (Mongoose)

How to Run the Project

Backend Setup

Open the server folder

Install dependencies
npm install

Create a .env file in the server folder with:
PORT=5000
MONGO_URI=your_mongodb_connection_string

Start the server
npm start

The backend runs on http://localhost:5000

Frontend Setup

Open the client folder

Install dependencies
npm install

Run the app
npm run dev

The frontend runs on http://localhost:3000

API Routes
POST /api/feedback - Add new feedback
GET /api/feedback - Get all feedback

Folder Structure
feedback-collector/
client/ Next.js frontend
server/ Express.js backend

Notes

Use Node.js version 18 or higher

Make sure the MongoDB connection string is correct

Run the backend before starting the frontend