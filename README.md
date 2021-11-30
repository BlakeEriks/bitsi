# Getting Started with Create React App
# JAB App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
JAB is an application built for users to invest in a simulated crpyto exchange and also track how well their assets are doing. Users start with $1,000,000 to invest and compete with other users. Users can register, sign up, and log in to where they can view a leaderboard of all the other portfolios. This application pulls data from two APIs while featuring full CRUD (create, read, update, and delete) functionality. 

## Available Scripts
## Technologies Used

In the project directory, you can run:
* React
* Javascript
	* Express
	* Mongoose
* Mongodb
* HTML
* CSS
* Heroku Deployment
* Netlify Deployment

### `npm start`
## Installation and Setup Instructions

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
## Resources 

The page will reload if you make edits.\
You will also see any lint errors in the console.
* Coin API
* Messari API

### `npm test`
## Reflection 

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
This project was built by three members, aka Team JAB, for our Unit 3 React Project. Our project goals included using technologies learned up to this point and practicing our dev skills along with working in a collaborative environment. In addition, we added User Authentication where we can register, create, and sign-up. 

### `npm run build`
### This application is built upon:
* Three object models: User, Portfolio, and Tokens
* A full CRUD express API for user portfolios and tokens
* A single-page built with React, giving users the ability to create their own cryptocurrency stock portfolio and manage a base $100,000 within our simulated exchange
* Users also given the ability to view other users’ portfolios as well as specific currencies

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.
Our main and biggest challenge was managing our API’s, specifically Binance. In an attempt to remedy this, we decided to use the API from Messari as well as it allows for us to make more pulls to constantly update the token data for users. 

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
## Stretch Goals

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

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
* Create a more versatile exchange with more coin options = more API calls which make it more difficult
* User can click a single `liquidate` button to liquidate all assets back into USD
