🚀 DevBlog - Premium MERN Blogging Platform
DevBlog is a high-performance, full-stack blogging application designed with a focus on modern UI/UX and secure data management. Built using the MERN stack, it features a decoupled architecture and a sleek, responsive interface inspired by Glassmorphism principles.

🛠️ Technical Stack
Frontend: React.js, Material UI (MUI), Styled Components.

Backend: Node.js, Express.js.

Database: MongoDB Atlas (Cloud Database).

Authentication: JSON Web Tokens (JWT) for secure user sessions.

File Handling: Integration with MongoDB GridFS for efficient image storage.

✨ Key Features
Premium UI/UX: Interactive navigation with glassmorphism blur effects and responsive MUI Grid layouts.

Complete CRUD Operations: Users can create, view, edit, and delete technical blogs seamlessly.

Secure Auth Flow: Protected routes ensuring only authenticated users can manage content.

Category Filtering: Search and filter blogs based on technical tags (e.g., Tech, Music, Sports).

Industry Standard Security: Sensitive credentials managed via environment variables (kept out of version control).

📁 Project Structure
The repository follows a clean, professional separation of concerns:

Plaintext
├── client/          # React.js Frontend
│   ├── public/      # Static assets
│   └── src/         # UI Components, Pages, and Logic
├── server/          # Node.js & Express Backend
│   ├── controller/  # API Logic
│   ├── database/    # Database Connection
│   ├── model/       # Mongoose Schemas
│   └── routes/      # API Endpoints
└── README.md        # Documentation
🚀 Getting Started
To run this project locally on your machine:

1. Prerequisites
Node.js installed.

MongoDB Atlas account and cluster set up.

2. Installation
Clone the repository:

Bash
git clone https://github.com/Avik-Mitra-7/DevBlog-Blogging-Platform.git
cd DevBlog-Blogging-Platform
Setup Server:

Bash
cd server
npm install
# Create a .env file and add your MONGODB_URI and JWT_SECRET
npm start
Setup Client:

Bash
cd client
npm install
npm start
🛡️ Best Practices Implemented
Security: Avoided credential leakage by using .gitignore for .env files.

Optimization: Prevented repository bloating by excluding node_modules.

Clean Code: Modular architecture for easy scalability and maintenance.
