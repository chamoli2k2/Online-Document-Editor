# Online Document Editor

This project is an online document editor similar to Google Docs, allowing multiple users to collaborate simultaneously without losing data even if the page is refreshed.

## Tech Stack

- **React**: Frontend framework for building user interfaces.
- **MongoDB**: NoSQL database for storing document data.
- **Socket.IO**: Real-time bidirectional communication library for enabling collaboration features.
- **Express**: Web application framework for Node.js for building the backend API.
- **Material-UI**: React component library for implementing a cohesive design system.

## Setup and Usage

To set up and use this project, follow these steps:

1. **Clone the Repository**: 
   ```
   git clone https://github.com/yourusername/online-document-editor.git
   ```

2. **Install Dependencies**:
   ```
   cd online-document-editor
   npm install
   ```

3. **Configure MongoDB**:
   - Install MongoDB locally or use a cloud-hosted solution.
   - Update the MongoDB connection string in the backend configuration file (`server.js` or similar) to point to your MongoDB instance.

4. **Start the Backend Server**:
   ```
   npm start
   ```

5. **Start the Frontend Development Server**:
   ```
   cd client
   npm start
   ```

6. **Access the Application**:
   Open your web browser and navigate to `http://localhost:3000` to access the online document editor. 

## Screenshots

![Screenshot 1](/images/image.png)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.