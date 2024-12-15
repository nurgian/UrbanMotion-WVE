# Urban Motion

**Urban Motion** is a vehicle rental application that allows users to easily rent vehicles anytime, anywhere. This repository contains the source code for both the **Frontend** and **Backend** of the application.

## Prerequisites
Before you begin, make sure you have the following installed:  
- [Node.js](https://nodejs.org/) (latest version recommended)  
- Git  

## How to Run the Application

### 1. Clone the Repository
Clone this repository to your local machine:  
```bash
    git clone <REPOSITORY_URL>
    cd <REPOSITORY_NAME>
```

### 2. Setup Backend 

1. Navigate to the backend directory
    
    ```bash
    cd backend
    ```

2. Install Dependencies

    Run the following command to install all necessary packages:

    ```bash
    npm install
    ```

3. Set Up Your `.env` File

    Locate the .env.sample file in the project’s root directory. Rename it to .env and configure the necessary environment variables (e.g., database connection strings, API keys).

4. Run Migrations and Seed the Database

    Ensure your database is up and running, then execute the following commands:
    1. Run Migrations:
        ```bash
        npm run migration-up
        ```
    2. Seed the Database :
        ```bash
        npm run seed-up
        ```
        
5. Launch the App

    Once the setup is complete, you can start the app by running:

    ```bash
    npm run dev
    ```

### 3. Setup Frontend 
1. Navigate to the frontend directory
    
    ```bash
    cd frontend
    ```

2. Install Dependencies

    Run the following command to install all necessary packages:

    ```bash
    npm install
    ```
        
3. Launch the App

    Once the setup is complete, you can start the app by running:

    ```bash
    npm run dev
    ```

### 4. Access the Application
    Frontend will be available at: http://localhost:5173 
    Backend will be available at: http://localhost:5000 (or as per your configuration) 
