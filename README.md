# E-COMMERCE-BACKEND

COMPANY: CODTECH IT SOLUTIONS

NAME:RAMYA.S

INTERN ID:CT12QTC

DOMAIN:BACK END DEVELOPMENT

DURATION:8 WEEKS

MENTOR:NEELA SANTOSH

DESCRIPTION:

INTRODUCTION:
The E-Commerce Backend API is a comprehensive backend system designed to support an online shopping platform. It provides core functionalities such as user authentication, product management, and order processing, ensuring smooth operations for an e-commerce business. Built using Node.js and Express.js, the backend follows the RESTful API architecture, making it easy to integrate with a frontend application or a mobile app.This system securely handles user authentication using JWT-based authorization, allowing only registered users to access protected routes. It also efficiently manages product listings and order processing through a MongoDB database, ensuring data persistence and scalability.

PROJECT PURPOSE:
The primary objective of this backend is to create a secure, scalable, and efficient system that facilitates key e-commerce functionalities. 
This includes:
User authentication – Allowing users to register, log in, and access protected routes.
Product management – Enabling the addition, retrieval, and listing of products.
Order processing – Managing customer orders, linking them to users, and calculating total costs.
Security and authentication – Protecting sensitive data through hashed passwords and JWT tokens.
This backend is essential for ensuring seamless interaction between users and the e-commerce system, enabling smooth transactions and data management.

KEY FEATURES AND FUNCTIONALITIES:
1. User Authentication & Authorization:
Users can register by providing their details.
Upon registration, passwords are hashed before being stored in the database for security.
Users can log in, and upon successful authentication, receive a JWT token.
Protected routes require users to send this token in the request headers, ensuring secure access.
2. Product Management:
Admins or authorized users can add new products with details such as name, price, description, and stock availability.
Users can view available products, ensuring easy browsing and shopping.
The system efficiently handles product data, allowing for future enhancements like filtering and sorting.
3. Order Management:
Registered users can place orders by selecting products and specifying quantities.
The backend calculates the total order cost before storing it in the database.
Each order is linked to a specific user (retrieved from the authentication token).
Users can retrieve their order history, allowing them to track past purchases.
4. Secure API Requests:
Every sensitive API request (e.g., placing an order) is protected using JWT authentication.
Unauthorized users cannot access restricted functionalities such as order placement.
Passwords are hashed and never stored in plaintext, ensuring security.
5. Database Integration with MongoDB:
User Data Management -Stores user credentials, hashed passwords, and authentication details.
Product Catalog - Keeps product details such as name, description, price, and stock quantity.
Order Processing - Saves user orders, linking them with purchased products and tracking total amounts.
MongoDB’s NoSQL structure allows flexibility in handling dynamic e-commerce data, making it scalable for growing businesses.

TECHNOLOGIES USED:
1. Backend Framework: Node.js with Express.js
Node.js powers the backend, ensuring high performance and scalability.
Express.js simplifies request handling and API route management.
2. Database: MongoDB
Stores structured product, user, and order data.
Provides fast querying capabilities for retrieving product listings and order histories.
3. Authentication & Security:
JWT (JSON Web Tokens) for secure authentication.
BCrypt.js for password hashing, preventing unauthorized access.
Dotenv for managing environment variables securely.
4. API Testing & Development Tools:
Postman is used to test API endpoints, ensuring smooth request handling.
Git & GitHub enable version control and collaboration.

INSTALLATION AND DEPLOYMENT:
Clone the repository from GitHub.
Install dependencies using the package manager.
Set up environment variables in a .env file for database configuration and JWT secret keys.
Run the backend server using a development script.
Test API endpoints via Postman or integrate with a frontend.
For production deployment, the backend can be hosted on cloud platforms such as Heroku or AWS, with MongoDB hosted on MongoDB Atlas.

CONCLUSION:
The E-Commerce Backend API is a well-structured system designed to handle essential functionalities of an online store. With secure user authentication, efficient product management, and seamless order processing, this backend serves as a strong foundation for any e-commerce platform. Future enhancements could include payment gateway integration, order tracking, and role-based access control.
This backend ensures that an e-commerce platform operates smoothly, securely, and efficiently, making it a key component for modern online shopping experiences.

OUTPUT:

USER REGISTER:

![Image](https://github.com/user-attachments/assets/0e199621-89e7-4b86-9bd9-2396a6777187)

USER LOGIN:

![Image](https://github.com/user-attachments/assets/a903adde-e782-4032-8385-d2eaa69f8379)

ADD PRODUCTS:

![Image](https://github.com/user-attachments/assets/4ee0b7e5-2633-4e4e-a0ac-298ac07f1b89)

GET PRODUCT:

![Image](https://github.com/user-attachments/assets/da8f17bc-471b-4a0e-9969-9f8bd4f10788)

PLACE ORDERS:

![Image](https://github.com/user-attachments/assets/88d78d82-dcb4-43fd-9d9f-6039e31a12b4)

GET ORDERS:

![Image](https://github.com/user-attachments/assets/8989b474-86dd-4a02-a159-8d544d83c8b0)
