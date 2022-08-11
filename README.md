# Budgeter
A website for users to track expenses in an online and organized way. \
\
Deployed to: https://the-budgeter.herokuapp.com/

## Setup

### 1. Install MongoDB here: 
- https://www.mongodb.com/docs/manual/administration/install-community/ 
- `sudo` is required to start the brew service.
- `mongosh` is the command to open the shell on newer versions of MongoDB, not `mongo`.

### 2. In the root directory AND client directory, run:

`yarn install` 
- This will install all dependencies for the frontend and backend.

### 3. Once the packages are installed, in the root directory run:

`cp .env.example .env` 
- This will create a file for environment varaibles. 
- You will need to change <NAME_OF_YOUR_LOCAL_DB> to a MongoDB database that is on your local machine.

### 4. Run the following command to start developing:

`yarn start`
- In the client directory, this will start the React app in a development server.
- In the root directory, this will start the Express server.
