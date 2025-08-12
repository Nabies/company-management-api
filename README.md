# Companies API

A RESTful API built with Node.js, Express, and MongoDB for managing company data. Supports CRUD operations and filtering by attributes such as name, industry, and location.

## Features
- Create, read, update, and delete companies
- Filter/search companies by attributes
- MongoDB for data storage
- Optional: React frontend for displaying and filtering companies

## Getting Started
1. Install dependencies:
   ```sh
   npm install
   ```
2. Create a `.env` file with your MongoDB connection string:
   ```env
   MONGODB_URI=your_mongodb_connection_string
   PORT=5000
   ```
3. Start the server:
   ```sh
   node index.js
   ```

## API Endpoints
- `GET /companies` - List/filter companies
- `POST /companies` - Add a new company
- `PUT /companies/:id` - Update a company
- `DELETE /companies/:id` - Delete a company

## Optional Frontend
- If you want a UI, create a React app in a `client` folder and connect it to the API.
