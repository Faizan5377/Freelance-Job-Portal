# TechWorks

*The premier platform connecting tech professionals with clients seeking specialized services*

---

## About

TechWorks is a comprehensive freelance platform that bridges the gap between talented tech professionals and clients seeking specialized services. The platform features:

- **For Freelancers:** Create and manage services, track performance metrics, receive client testimonials
- **For Clients:** Browse available services, make service requests, monitor order status and expenditures
- **For Everyone:** Personalized dashboards, profile customization, and real-time communication

## Technical Foundation

| Layer | Technology |
|-------|------------|
| Database | MongoDB |
| Backend | Express & Node.js |
| Frontend | React |
| Real-time Communication | Socket.io |

## Getting Started

### System Requirements
- Node.js (latest stable version)
- MongoDB (latest stable version)

### Setup Instructions

1. Clone the repository
2. Install dependencies for each component:
   ```bash
   # Setup API server
   cd api
   npm install

   # Setup client application
   cd ../client
   npm install

   # Setup socket server
   cd ../socket
   npm install
   ```
3. Launch all services:
   ```bash
   # In each directory (api, client, socket)
   npm start
   ```

## Dependency Overview

### Server-side Technologies
- **bcrypt** - Secure password hashing
- **cors** - Cross-origin resource sharing
- **dotenv** - Environment variable management
- **express** - Web framework
- **jsonwebtoken** - Authentication
- **mongoose** - MongoDB object modeling
- **multer** - File upload handling

### Client-side Technologies
- **axios** - HTTP client
- **moment** - Date formatting
- **react-icons** - Icon library
- **@reduxjs/toolkit** - State management
- **react-router** & **react-router-hash-link** - Routing
- **react-spinners** - Loading animations
- **react-toastify** - Notification system
- **socket.io-client** - Real-time communication
- **swiper** - Touch slider