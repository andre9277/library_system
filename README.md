# Library Management System

![Project Image](url_to_project_image)

A full-stack web application for managing a library's inventory, built using the MERN stack (MongoDB, Express.js, React, Node.js).
(In Progress...)

## Table of Contents

- [About](#about)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## About

The Library Management System is designed to help libraries organize and manage their book inventory efficiently. It provides a user-friendly interface for both librarians and patrons, allowing librarians to add, update, and remove books, while patrons can search for available books, check their details, and request them.

## Features

- **User Authentication:** Secure user authentication for librarians and patrons.
- **Book Management:** Add, update, and remove books from the library inventory.
- **Search Functionality:** Patrons can search for books based on various criteria.
- **Book Details:** View detailed information about each book, including availability status.
- **Request System:** Patrons can request to borrow books, and librarians can manage requests.

## Technologies Used

- **MongoDB:** NoSQL database for storing and managing library data.
- **Express.js:** Backend framework for building the API and managing server-side logic.
- **React:** Frontend library for creating a dynamic and responsive user interface.
- **Node.js:** Runtime environment for executing server-side JavaScript code.
- **TypeScript (optional):** Adds static typing to JavaScript for improved code quality.
- **Docker:** Containerization for consistent deployment across environments.

## Getting Started

To get started with the Library Management System locally, follow these instructions.

### Installation

1. Clone the repository:

    ```bash
    gh repo clone andre9277/library_system
    cd library-system
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Set up environment variables:

    Create a `.env` file in the root directory with the following content:

    ```env
    MONGODB_URI=your_mongodb_connection_string
    SECRET_KEY=your_secret_key
    ```

    Replace `your_mongodb_connection_string` with your MongoDB connection string and `your_secret_key` with a secret key for authentication.

### Usage

1. Start the server:

    ```bash
    npm run start:server
    ```

2. Start the React app:

    ```bash
    npm run start:client
    ```

3. Open your browser and navigate to [http://localhost:3000](http://localhost:3000).

## Contributing

Contributions are welcome!

## License

