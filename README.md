# RoomRoster 🏠

RoomRoster is a full-stack web application designed for hotel and accommodation management. Inspired by modern rental platforms, it allows users to list their properties, browse listings, and leave reviews.

## 🚀 Features

- **User Authentication**: Secure signup and login functionality using Passport.js.
- **Listing Management**: Users can create, edit, view, and delete property listings.
- **Image Upload**: Integration with **Cloudinary** for secure and efficient image hosting.
- **Review System**: Authorized users can leave ratings and comments on listings.
- **Authorization**: Protected routes ensuring only owners can modify listings and only authors can delete their reviews.
- **Responsive Design**: Built with Bootstrap for a seamless experience across devices.

## 🛠️ Tech Stack

- **Frontend**: EJS (Embedded JavaScript templates), Bootstrap, CSS.
- **Backend**: Node.js, Express.js.
- **Database**: MongoDB (Local/Atlas).
- **Authentication**: Passport.js with Local Strategy.
- **Cloud Storage**: Cloudinary (via Multer).

## 🚀 Getting Started

### Prerequisites

- Node.js installed on your machine.
- MongoDB installed and running locally (default: `mongodb://127.0.0.1:27017/roomroster`).

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/sidak32/RoomRoster.git
   cd RoomRoster
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Environment variables**:
   Create a `.env` file in the root directory and add the following:
   ```env
   CLOUD_NAME=your_cloud_name
   CLOUD_API_KEY=your_api_key
   CLOUD_API_SECRET=your_api_secret
   SECRET=your_session_secret
   MONGO_URL=mongodb://127.0.0.1:27017/roomroster
   ```

4. **Run the application**:
   ```bash
   npm start
   ```

5. **Open in browser**:
   Visit `http://localhost:8000`
