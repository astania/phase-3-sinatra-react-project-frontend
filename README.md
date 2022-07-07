# Restaurant Reservation App Frontend

## Overview

This is the backend for a restaurant reservation app. The objective of this project is to showcase skills in Ruby and Active Record. You can create guests, log in, view available restaurants, create reservations, view your reservations, and edit the reservations. 

![gif](https://i.imgur.com/NaeImuH.mp4)

### Requirements 
* node version 14.17.5
* npm version 8.12.1


### How to use 
Fork the repo - navigate here https://github.com/astania/phase-3-sinatra-react-project-frontend and click "fork" in the top right corner
Clone the repo - In your terminal type (ensuring to add your github username):  git clone git@github.com:username/phase-3-sinatra-react-project-frontend 
run npm install
run npm start
If you haven't already, follow directions for backend https://github.com/astania/phase-3-sinatra-react-project

## Usage

This is a demo app, so while you can create new users and switch between them, there is no true log-in capabilities. 

To create a user, you can fill in the form on the front page and click "create account". This will automatically log you in as that user. You can navigate to the restaurants tab and click "make a reservation". Enter the appropriate information into the form that appears and then click "make a reservation". Your reservation will then be available in the "My Reservations" tab. You can delete any reservation, or edit them by clicking the "edit reservation" button. To log out, go to the "Profile" tab and click "log out". You can then add a new user, or log in as any existing user. 

### File structure

In the components folder:

 The guestInfo folder holds the GuestProfile component which displays the logged-in guest

 The  logins folder holds the GuestHome component that renders either the LoggedInHome component if the guest is logged in, or the LogInScreen if they are not. 

 the navigation folder holds the header, footer, default navbar and guest navbar. The default navbar will be rendered if the guest is not logged in. The guest navbar will render if they are logged in. 

the reservationInfo folder holds the ReservationList component that programmatically renders the ReservationCard components 

the restaurantInfo folder holds the RestaurantList component that renders the RestaurantCard component, and the RestaurantProfile which is rendered when the guest clicks "make a reservation"

### Licensing
Copyright (c) 2022 Anna Stania

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

### Contributions
Contributions are greatly appreciated.

If you have a suggestion, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement". Don't forget to give the project a star! Thanks again!

### Fork the Project
-Create your Feature Branch (git checkout -b feature/AmazingFeature)
- Commit your Changes (git commit -m 'Add some AmazingFeature')
- Push to the Branch (git push origin feature/AmazingFeature)
- Open a Pull Request

## Contact

Anna Stania - annaestania@gmail.com

## Available Scripts

In the project directory, you can run:

### `npm run server`

Starts the json server on port 3001

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
