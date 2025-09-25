# Better Notes 📝

A modern, secure note-taking application built with the MERN stack (MongoDB, Express.js, React, Node.js).

## Features 🚀

- User Authentication and Authorization
- Create, Read, Update, and Delete Notes
- Tag-based Note Organization
- Responsive Design with Tailwind CSS
- Dark Mode Support
- Secure API Endpoints

## Tech Stack 💻

### Frontend

- React 19
- React Router DOM
- Tailwind CSS
- Lucide React (Icons)
- Vite (Build Tool)

### Backend

- Node.js & Express.js
- MongoDB with Mongoose
- JWT for Authentication
- bcrypt.js for Password Hashing
- Express Validator

## Project Structure 📂

```
betterNotes/
├── src/                    # Frontend source files
│   ├── components/         # React components
│   ├── lib/               # Utility functions
│   └── assets/            # Static assets
├── backend/               # Backend source files
│   ├── models/            # MongoDB models
│   ├── routes/            # API routes
│   ├── middleware/        # Custom middleware
│   └── db.js             # Database configuration
└── public/               # Public assets
```

## Getting Started 🏃‍♂️

1. Clone the repository
2. Install dependencies:

   ```bash
   # Install frontend dependencies
   npm install

   # Install backend dependencies
   cd backend
   npm install
   ```

3. Set up MongoDB:

   - Make sure MongoDB is installed and running
   - The default connection URL is: `mongodb://localhost:27017/betterNotesDB`

4. Start the development server:

   ```bash
   # Run frontend and backend concurrently
   npm run concur
   ```

   This will start:

   - Frontend at `http://localhost:5173`
   - Backend at `http://localhost:3000`

## API Endpoints 🛣️

### Authentication Routes

- `POST /api/auth/createuser` - Create a new user
- `POST /api/auth/login` - User login
- `POST /api/auth/getuser` - Get user details (requires authentication)

### Notes Routes

- `GET /api/notes/fetchnotes` - Get all notes
- `POST /api/notes/addnote` - Create a new note
- `PUT /api/notes/updatenote/:id` - Update a note
- `DELETE /api/notes/deletenote/:id` - Delete a note

## Available Scripts 📜

- `npm run dev` - Start frontend development server
- `npm run build` - Build frontend for production
- `npm run preview` - Preview production build
- `npm run concur` - Run frontend and backend concurrently
- `npm run lint` - Run ESLint

## Contributing 🤝

Feel free to contribute to this project. Open a pull request or submit an issue for any bugs/improvements.

## License 📄

MIT License - feel free to use this project for your own learning or development.
