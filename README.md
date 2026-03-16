# DevBlog: A Decoupled Full-Stack Content Management System

DevBlog is a high-performance blogging platform built with the MERN stack, featuring a micro-architecture design that separates concerns between a React-driven frontend and a RESTful Node.js backend. The application implements industry-standard security protocols and a sophisticated UI based on modern design systems.

---

## Technical Specifications

### Frontend Architecture
* **Library:** React.js (Functional components with Hooks)
* **UI Framework:** Material UI (MUI) v5
* **Styling:** Styled Components (CSS-in-JS) for modular, dynamic styling
* **State Management:** Context API / Local State for streamlined data flow
* **Design System:** High-fidelity Glassmorphism with responsive grid layouts

### Backend Architecture
* **Runtime:** Node.js
* **Framework:** Express.js (REST API design)
* **Database:** MongoDB Atlas (Cloud)
* **ORM:** Mongoose for schema-based data modeling
* **File Handling:** Integration with MongoDB GridFS for efficient image storage

---

## Key Functionalities

### Content Lifecycle Management
Implements full CRUD (Create, Read, Update, Delete) operations. The system uses a decoupled approach where the frontend consumes RESTful endpoints to manage blog posts and user data.

### Security and Authentication
* **JWT Implementation:** Secure session management using JSON Web Tokens.
* **Encrypted Communication:** Passwords hashed using bcrypt before database entry.
* **Protected Routes:** Client-side route guards and server-side middleware to prevent unauthorized access.
* **Credential Masking:** Use of environment variables to prevent sensitive data exposure in version control.

### Dynamic Content Discovery
* **Multi-Criteria Filtering:** Server-side logic to filter content by categories (Tech, Music, Sports, etc.).
* **Search Optimization:** Efficient querying for blog post retrieval based on technical tags.

---

## Project Structure

The codebase is organized into a monorepo structure to facilitate easy maintenance and full-stack development synchronization:

```text
├── client/                 # Frontend application (React.js)
│   ├── public/             # Static assets and HTML template
│   └── src/                # Component-based UI logic
├── server/                 # Backend API (Node.js & Express)
│   ├── controller/         # Business logic and request handlers
│   ├── database/           # Mongoose configuration and connection
│   ├── model/              # Data schemas and validation
│   └── routes/             # API endpoint definitions
└── README.md               # Documentation