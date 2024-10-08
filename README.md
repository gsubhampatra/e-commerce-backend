# E-commerce API with Node.js, Express, and MongoDB

This project is a robust backend API for an e-commerce platform, built using **Node.js**, **Express**, and **MongoDB**. It provides functionalities such as user authentication, product management, and order processing. The API is designed using RESTful principles, ensuring scalability and efficient integration with a frontend application.

The project also includes automated unit and integration testing using **Jest**, and a CI/CD pipeline established with **GitHub Actions** for continuous testing and deployment to **AWS/Vercel**.

## Features

- **User Authentication**: Secure registration and login using JWT for token-based authentication.
- **Product Management**: Endpoints to create, update, retrieve, and delete products.
- **Order Processing**: Allows users to create and manage orders, supporting CRUD operations for orders.
- **MongoDB Integration**: All product and order data are stored and managed in MongoDB.
- **Testing**: Automated unit and integration testing using **Jest**.
- **CI/CD Pipeline**: Automated testing and deployment via **GitHub Actions** to **AWS/Vercel**.

## Technologies Used

- **Node.js**: JavaScript runtime used for building the backend.
- **Express**: Web framework for creating API routes and handling requests/responses.
- **MongoDB**: NoSQL database used for storing user, product, and order data.
- **Jest**: Testing framework for writing and running unit and integration tests.
- **GitHub Actions**: Automates the CI/CD pipeline for testing and deploying the application.
- **AWS/Vercel**: Hosting and deployment platforms.

## Project Structure

```bash
├── controllers/     # Contains API endpoint controllers
├── models/          # Contains MongoDB schemas and models
├── routes/          # API routes configuration
├── tests/           # Unit and integration tests
├── helpers/         # helper functions
├── services/        # different services (e.g.,register,login,verify )
├── middleware/      # Custom middleware for authentication and error handling
├── config/          # Configuration files (e.g., DB connection, Email configuration)
├── .env             # Environment variables
├── .gitignore       # Ignoring unnecessary files for Git
├── app.js           # Main entry point of the application
├── server.js        # server setup
└── package.json     # Project dependencies and scripts
```

## Installation

To get started with this project, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/ecommerce-api.git
   cd ecommerce-api
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env` file in the root directory and add the following variables:

   ```bash
   MONGO_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   ```

4. **Run the application:**
   ```bash
   npm start
   ```

5. **Run tests:**
   ```bash
   npm test
   ```

## API Endpoints

Here’s a brief overview of the available API endpoints:

### User Authentication

- **POST /api/auth/register** – Register a new user.
- **POST /api/auth/login** – Log in a user and receive a JWT token.

### Product Management

- **GET /api/products** – Retrieve all products.
- **POST /api/products** – Create a new product (Admin only).
- **GET /api/products/:id** – Retrieve a specific product by ID.
- **PUT /api/products/:id** – Update product details (Admin only).
- **DELETE /api/products/:id** – Delete a product (Admin only).

### Order Management

- **GET /api/orders** – Retrieve all orders (Admin only).
- **POST /api/orders** – Create a new order.
- **GET /api/orders/:id** – Retrieve an order by ID.
- **PUT /api/orders/:id** – Update an order's status (Admin only).
- **DELETE /api/orders/:id** – Delete an order (Admin only).

## Testing

- **Unit and Integration Tests**: All important components and services are covered by unit and integration tests using Jest.
- To run the tests, execute:
  ```bash
  npm test
  ```

## CI/CD Pipeline

This project uses **GitHub Actions** for continuous integration and deployment. Every push to the main branch triggers the following:

- Automated tests (unit and integration tests) to ensure the API's stability.
- Deployment to **AWS/Vercel**.

## Contribution

Feel free to open issues or submit pull requests if you have suggestions for improving the project.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

---

Feel free to reach out with any questions or feedback. Happy coding! 👨‍💻👩‍💻