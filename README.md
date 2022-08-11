# Budgeter
A website for users to track expenses in an online and organized way. \
Deployed to: https://the-budgeter.herokuapp.com/

## Setup

### 1. Install MongoDB here: 
- https://www.mongodb.com/docs/manual/administration/install-community/ 
- `sudo` is required to start the brew service
- `mongosh` is the command to open the shell on newer versions of MongoDB, not `mongo` or `mongod`  

### 2. In the root directory and client directory, run:

`yarn install` 
- This will install all dependencies for the frontend and backend 

### 3. Once the packages are installed, in the root directory run:

`cp .env.example .env` 
- This will create a file for environment varaibles. 
- You will need to change <NAME_OF_YOUR_LOCAL_DB> to a MongoDB database that is on your local machine. 

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
