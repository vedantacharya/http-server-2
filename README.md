# Express Kidney Health API

This project is a simple Express.js application that tracks the health status of kidneys for a user. The API provides endpoints to retrieve the number of kidneys and their health status, as well as to add new kidneys.

## Prerequisites

- [Node.js](https://nodejs.org/en/download/) (v12.x or later)
- [Express.js](https://expressjs.com/)

## Installation

1. Clone the repository or download the code.
   ```bash
   git clone https://github.com/yourusername/kidney-health-api.git
   cd kidney-health-api
   ```

2. Install the required dependencies:
   ```bash
   npm install
   ```

3. Start the server:
   ```bash
   node index.js
   ```
   The server will run on `http://localhost:3000` by default.

## API Endpoints

### 1. **GET `/`**

   Retrieves the number of kidneys, the number of healthy kidneys, and the number of unhealthy kidneys.

   **Example Response:**
   ```json
   {
     "numberOfKidneys": 2,
     "numberOfHealthyKidneys": 1,
     "numberOfUnhealthyKidneys": 1
   }
   ```

### 2. **POST `/`**

   Adds a new kidney with a health status to the user's kidney list.

   **Request Body:**
   ```json
   {
     "isHealthy": true
   }
   ```

   **Example Response:**
   ```json
   {
     "msg": "Done!"
   }
   ```

### 3. **PUT `/`**
   - This endpoint is currently a placeholder and is not yet implemented.
   
### 4. **DELETE `/`**
   - This endpoint is currently a placeholder and is not yet implemented.

## Usage

### Adding a New Kidney

To add a new kidney to the user's list, send a POST request to `http://localhost:3000/` with the following JSON payload:

```json
{
  "isHealthy": true
}
```

You can set `"isHealthy"` to either `true` or `false` depending on the health status of the kidney.

### Getting the Kidney Status

To retrieve the current status of kidneys (including the total count, healthy count, and unhealthy count), send a GET request to `http://localhost:3000/`.

## License

This project is licensed under the MIT License. Feel free to use, modify, and distribute the code as needed.