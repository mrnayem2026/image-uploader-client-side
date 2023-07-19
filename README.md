# Fullstack Project - ImageUploder

## Description
ImageUploder is a web application that allows users to upload image files. Users can easily upload images by selecting them from their local file system or by dragging and dropping them onto the web interface. Once uploaded, the images can be viewed by anyone, including the uploader.

If a user navigates to an incorrect route, they will be redirected to an error page. From there, they can click the "Back to Homepage" button to return to the home page.

## Technologies Used
- **Frontend**:
  - "@heroicons/react"
  - "@tanstack/react-query"
  - "axes"
  - "daisyui"
  - "react"
  - "react-dom"
  - "react-router-dom"
  - "react-spinners"
  - "sweetalert2"
  - "@types/react"
  - "@types/react-dom"
  - "@vitejs/plugin-react"
  - "autoprefixer"
  - "eslint"
  - "eslint-plugin-react"
  - "eslint-plugin-react-hooks"
  - "eslint-plugin-react-refresh"
  - "postcss"
  - "tailwindcss"
  - "vite"

- **Backend**:
  - "body-parser"
  - "cors"
  - "dotenv"
  - "express"
  - "mongodb"
  - "nodemon"

## Usage
To run the ImageUploder application, follow these steps:

1. Clone the repository:
   ```
   git clone https://github.com/mrnayem2026/image-uploader-client-side.git
   ```

2. Install the dependencies for both the frontend and backend:
   ```
   cd image-uploader-client-side
   npm install
   ```

3. Create a `.env` file in the `backend` directory and configure the following environment variables:
   ```
   PORT=3000
   MONGODB_URI=your-mongodb-connection-string
   ```

4. Open another terminal and start the frontend development server:
   ```
   npm run dev
   ```

6. Open your browser and navigate to `http://localhost:5173` to access the ImageUploder application.

## Live Site

You can access the live version of the website at [Image Uploader](https://bright-fox-8dde81.netlify.app/).

![Screenshot](/src/assets/web.png)