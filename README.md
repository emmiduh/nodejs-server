# Assignment: Simple Node.js Server

## Description
In this assignment, we create a simple server using the core `node:http` module in Node.js. The server is capable of handling multiple concurrent requests and responds with a message after a random delay to simulate an asynchronous operation without blocking the server.

## Features
- Handles multiple concurrent requests.
- Responds with a message after a random delay.
- Configured to handle CORS (Cross-Origin Resource Sharing).
- Provides a GET route to retrieve information about the user's CPU and OS.

## Usage
1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install dependencies using `npm install`.
4. Run the server using `npm start`.
5. Access the server endpoints, including the GET route for CPU and OS information.

## Implementation
The server is implemented using the `node:http` module along with the `cors` middleware for handling CORS. The server provides a GET route `/info` to retrieve CPU and OS information. The `os` module is used to gather system-related information such as CPU architecture, total memory, free memory, OS type, platform, and release version.

## Submission
Please push your code to GitHub and submit the publicly available GitHub repository URL.

### Note:
Ensure that the server is properly configured and running on a suitable port. Additionally, handle any errors or exceptions gracefully for a smooth user experience.
