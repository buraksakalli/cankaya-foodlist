# Cankaya Food List API

<img src="https://user-images.githubusercontent.com/10114716/73559831-e22a5700-4466-11ea-93a3-03c4c32c1078.jpg"/>
<p>Cankaya University Dining Hall Food List API developed with Node.JS and MongoDB.</p>

[![Build Status](https://travis-ci.com/buraksakalli/cankaya-foodlist.svg?branch=master)](https://travis-ci.com/buraksakalli/cankaya-foodlist)
<img src="https://api.netlify.com/api/v1/badges/091ff151-1ff8-40ce-8ae4-f52ef0eca90d/deploy-status">


## Installation

```bash
npm install
or
yarn install
```

## Usage

```bash
nodemon
or
node app.js
```
Then change the `.env.example` to `.env` and change `mongoURI` with your Mongo URI like inside it.

- The model of Collection is indicated in `/app/models/food.js`
- In `/docs` you can reach swagger or see on <a href="https://cankaya-food.herokuapp.com/docs">heroku</a>

## Demo
<a href="https://cankaya-food.herokuapp.com">Heroku</a>

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.