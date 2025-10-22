Feedback Collector App

This project is a simple full stack web application used to collect feedback from users.
Users can submit their name and message, view all feedback, and delete any entry.

Features

Add feedback (name and message)

View all submitted feedback

Delete feedback items

Simple and responsive interface

Technologies Used

Frontend: Next.js, Tailwind CSS, Axios
Backend: Node.js, Express.js, MongoDB (Mongoose)

How to Run the Project
1. Backend Setup

Open the server folder

Install dependencies

npm install


Create a .env file in the server folder with:

PORT=5000
MONGO_URI=your_mongodb_connection_string


Start the server

npm start


The backend runs on http://localhost:5000

2. Frontend Setup

Open the client folder

Install dependencies

npm install


Run the app

npm run dev


The frontend runs on http://localhost:3000

API Routes
Method	Endpoint	Description
POST	/api/feedback	Add new feedback
GET	/api/feedback	Get all feedback
DELETE	/api/feedback/:id	Delete feedback by ID
Folder Structure
feedback-collector/
├── client/   → Next.js frontend
└── server/   → Express.js backend

Notes

Use Node.js v18 or higher

Make sure MongoDB connection string is correct

Run backend before the frontend