# Server-Side Rendering with Node.js, Express.js, and EJS

This project demonstrates a simple implementation of **Server-Side Rendering (SSR)** using **Node.js**, **Express.js**, and **EJS** as the templating engine. It showcases how to render dynamic content on the server and send fully rendered HTML to the client.

## Features

- **Server-Side Rendering (SSR):** Renders HTML on the server using EJS templates.
- **Dynamic Content:** Passes data from the server (index.js) to the EJS templates for rendering.
- **Express.js Integration:** Uses Express.js for routing and server setup.
- **Lightweight and Simple:** A minimal example to understand the basics of SSR.

## Prerequisites

Before running this project, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/server-side-rendering-node-js.git
   cd server-side-rendering-node-js

   ```

2. Install dependencies:

   ```bash
   npm install
   ```

## Usage

### Start the Development Server

To run the project in development mode with **nodemon** (auto-restarts the server on file changes):

1. Start the development server:

   ```bash
   npm run dev
   ```

2. Open your browser and navigate to:

   ```
   http://localhost:3000
   ```

3. You should see a rendered HTML page with dynamic content.

### Another option to start the Server

To run the project:

1. Start the server:

   ```bash
   npm start
   ```

2. Open your browser and navigate to:

   ```
   http://localhost:3000
   ```

## Running Tests

To run the unit tests for this project, you can use the following commands:

1. **Run all tests:**

   ```sh
   npm test
   ```

2. **Run tests in watch mode:**

   ```sh
   npm run test:watch
   ```

## Project Structure

```
server-side-rendering-node-js/
├── src/
│   ├── views/          # EJS templates
│   │   ├── index.ejs   # Main template for the home page
│   │   ├── users.ejs   # Template for the users page
│   ├── index.js        # Entry point to start the server
├── test/               # Test files
│   └── index.test.js   # Unit tests for the application
├── .gitignore          # Git ignore file
├── package.json        # Project metadata and dependencies
├──
```

## Example Output

When you visit the root route (`/`), the server renders an HTML page with the following content:

- **Title:** "Hello World!"
- **Message:** "Hello World from server-side rendering with Node.js and EJS!"

## Technologies Used

- **Node.js:** JavaScript runtime for building the server.
- **Express.js:** Web framework for routing and server logic.
- **EJS:** Templating engine for rendering HTML.
- **Nodemon:** Development tool for automatically restarting the server on file changes.

## Contributing

Contributions are welcome! If you find a bug or have a feature request, you'd like to add or improvements to existing solutions, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature-name`).
5. Open a pull request.

Please ensure your code follows the project's coding standards and includes appropriate test cases.

## License

This project is licensed under the MIT License.
