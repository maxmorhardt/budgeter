# Budgeter
A website for users to track expenses in an online and organized way. \
\
Deployed here: TBD (Heroku no longer free)

## Setup

### 1. Install MongoDB here: 
https://www.mongodb.com/docs/manual/administration/install-community/ 
- `sudo` is required to start the brew service.
- `mongosh` is the command to open the shell on newer versions of MongoDB, not `mongo`.

### 2. In the root directory AND client directory, run:

`yarn install` 
- This will install all dependencies for the frontend and backend.

### 3. Once the packages are installed, in the root directory run:

`cp .env.example .env` 
- This will create a file for environment varaibles.

### 4. To configure nodemon, run:

`nodemon --config nodemon.json`
- Now nodemon won't conflict with React's development server.

### 5. Run the following command to start developing:

`yarn start`
- In the client directory, this will start the React app in a development server.
- In the root directory, this will start the Express server.
