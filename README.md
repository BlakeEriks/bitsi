# JAB App

JAB is an application built for users to invest in a simulated crpyto exchange and also track how well their assets are doing. Users start with $1,000,000 to invest and compete with other users. Users can register, sign up, and log in to where they can view a leaderboard of all the other portfolios. This application pulls data from two APIs while featuring full CRUD (create, read, update, and delete) functionality. 

## Technologies Used

* React
* Javascript
	* Express
	* Mongoose
* Mongodb
* HTML
* CSS
* Heroku Deployment
* Netlify Deployment

## Installation and Setup Instructions

## Resources 

* Coin API
* Messari API

## Reflection 

This project was built by three members, aka Team JAB, for our Unit 3 React Project. Our project goals included using technologies learned up to this point and practicing our dev skills along with working in a collaborative environment. In addition, we added User Authentication where we can register, create, and sign-up. 

### This application is built upon:
* Three object models: User, Portfolio, and Tokens
* A full CRUD express API for user portfolios and tokens
* A single-page built with React, giving users the ability to create their own cryptocurrency stock portfolio and manage a base $100,000 within our simulated exchange
* Users also given the ability to view other users’ portfolios as well as specific currencies

Our main and biggest challenge was managing our API’s, specifically Binance. In an attempt to remedy this, we decided to use the API from Messari as well as it allows for us to make more pulls to constantly update the token data for users. 

## Stretch Goals

* Create a more versatile exchange with more coin options = more API calls which make it more difficult
* User can click a single `liquidate` button to liquidate all assets back into USD