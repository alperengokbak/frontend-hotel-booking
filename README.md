# MyDreamHotels - Hotel Booking Platform

MyDreamHotels is a web application for booking hotels, offering a seamless experience for users to explore, search, and book accommodations. The project is divided into two main parts: a React.js frontend and a Node.js backend with Prisma ORM for database operations.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [API Endpoints](#api-endpoints)
- [Authentication](#authentication)
- [Google Maps Integration](#google-maps-integration)
- [Screenshots And Video](#screenshots-and-video)

## Features

- **User Authentication:** Users can sign in using email/password or Google account.
- **Hotel Listings:** Display a list of hotels with details like name, location, price, and ratings.
- **Hotel Details:** View detailed information about a specific hotel, including features, prices, and a map.
- **Search Functionality:** Users can search for hotels based on destination, entry/exit dates, guests, and rooms.
- **Member Discounts:** Special prices for registered members.
- **Google Maps Integration:** Display hotel locations on Google Maps.

## Prerequisites

- Node.js
- npm (Node Package Manager)
- React.js
- Prisma CLI
- Google Maps API Key

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/alperengokbak/mydreamhotels.git
   ```

2. Install dependencies:

   ```bash
   cd mydreamhotels
   npm install
   ```

3. Set up the backend (Node.js and Prisma):

   ```bash
   cd backend
   npm install
   ```

   - Create a `.env` file based on `.env.example` and add your database connection details. Don't forget to put **VITE** in front of the variables.

   ```bash
   npx prisma migrate dev (npm run migrate)
   npx prisma generate
   ```

## Usage

1. Start the backend server:

   ```bash
   cd backend
   npm run dev
   ```

2. Start the frontend application:

   ```bash
   cd frontend
   npm run dev
   ```

3. Open your browser and visit [https://booking-hotel-sntf.onrender.com/](https://booking-hotel-sntf.onrender.com/) to use MyDreamHotels.

## Folder Structure

- `backend`: Node.js backend with Prisma ORM. [You can look backend code from this link.](https://github.com/alperengokbak/backend-hotel-booking?tab=readme-ov-file#getting-started)
- `frontend`: React.js frontend.
- `context`: React context providers.
- `services`: Utility functions and services.
- `components`: Reusable React components.

## API Endpoints

- `GET /hotel/weekend`: Fetch hotels for the upcoming weekend.
- `GET /hotel/:id`: Get details of a specific hotel.
- `GET /hotel/search`: Search for hotels based on user input.
- `POST /hotel/booking`: Book a hotel.
- `DELETE /hotel/booking`: Cancel a hotel booking.
- `GET /customer/check`: Check if a user is logged in.
- `POST /customer/login`: User login endpoint.
- `POST /customer/register`: User register endpoint.
- `POST /admin/add-hotel`: Add a new hotel to the database for admin.
- `POST /admin/delete-hotel`: Delete a existing hotel from database, It's just for admin users.

## Authentication

- User authentication is handled using a combination of email/password and Google OAuth.
- JWT tokens are used for secure communication between the frontend and backend.

## Google Maps Integration

- The Google Maps API is used to display hotel locations on the map.
- The API key is required and should be added to the frontend `.env` file.

## Screenshots And Video

### Coming Soon
