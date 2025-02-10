# Color Manager App

This is a single-page application (SPA) built with React for managing color definitions. It allows users to view, add, delete, and filter colors, each with a name and hexadecimal value.

## Technologies Used

### Frontend

- React (Vite)
- Redux Toolkit
- React Hook Form
- Tailwind CSS
- ESLint (code quality)
- Prettier (code formatting)

### Backend

- Node.js
- Express.js
- Postman (API testing)

### Data Storage

- JSON file

## Getting Started

1. Clone the repository

```bash
git clone https://github.com/damjans92/color-manager.git
```

### Backend Setup

1. Navigate to the backend directory:

```bash
cd backend
```

2. Install dependencies

```bash
npm install
```

3. Start the backend server

```bash
npm start
```

### Frontend Setup

1. Navigate to the frontend directory:

```bash
cd frontend
```

2. Install dependencies

```bash
npm install
```

3. Start the backend server

```bash
npm run dev
```

The frontend application will be available at http://localhost:5173/.

## Features

- **View Colors:** Displays a list of defined colors with their names and hexadecimal values.
- **Add Color:** Allows users to add new colors by providing a name and hexadecimal value.
- **Update Color:** Allows users to update existing colors.
- **Delete Color:** Enables users to delete existing colors.
- **Filter Colors:** Provides a search functionality to filter colors by name or hexadecimal value.

## API Endpoints (Backend)

- **GET /colors:** Retrieves all colors from the `colors.json` file.
- **POST /colors:** Adds a new color to the `colors.json` file.
- **PUT /colors/:id:** Updates existing color in the `colors.json` file.
- **DELETE /colors/:id:** Deletes a color from the `colors.json` file based on its ID.
