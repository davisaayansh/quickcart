# QuickCart - A simple eCommerce website
🛒 QuickCart — About the Project

QuickCart is a modern, full-stack e-commerce web application designed to deliver a fast, secure, and user-friendly online shopping experience. The platform allows users to browse products, manage their shopping cart, save delivery addresses, and place orders seamlessly with real-time updates and secure authentication.
Built using Next.js and MongoDB, QuickCart focuses on performance, scalability, and clean architecture. The application integrates Clerk authentication for secure user management and uses RESTful APIs to handle orders, cart operations, and user data. Background tasks and event handling are managed using Inngest, ensuring reliable order processing.
QuickCart follows industry best practices such as protected routes, server-side validation, modular code structure, and environment-based configuration, making it production-ready and easy to extend.

🚀 Key Features
🔐 Authentication & Security
Secure user authentication using Clerk
Protected API routes with token-based authorization
User-session–aware cart and order handling

🛍️ Shopping & Cart
Product listing with dynamic pricing and offers
Add, update, and remove items from the cart
Cart persistence per authenticated user
Automatic cart reset after successful order placement

📦 Order Management
Create and process orders with tax calculation
Background event handling using Inngest
Order confirmation flow with success page

🏠 Address Management
Add and manage multiple delivery addresses
Address selection during checkout
User-specific address storage

⚡ Performance & UX
Fast page rendering with Next.js App Router
Optimized API calls using Axios
Responsive UI for desktop and mobile devices
Toast notifications for real-time feedback

🧰 Tech Stack Used
Frontend: Next.js (App Router), React, Tailwind CSS
Backend: Next.js API Routes, Node.js
Database: MongoDB with Mongoose
Authentication: Clerk
Background Jobs / Events: Inngest
State Management: React Context API
HTTP Client: Axios

🎯 Project Highlights
Clean separation between authentication (Clerk) and application data (MongoDB)
Secure and scalable architecture
Real-world e-commerce flow implementation
Production-ready code structure
