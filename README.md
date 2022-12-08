# E-commerce-website (Fullstack) :shopping:

### Title
"Demeter" 

### Description
E-commerce website for perfumery brand </br>

### Features:
- full featured shopping cart
- user sign up and login system
- search and sort products functionality
- stock management
- top carusel products
- checkout process with credit card and paypal
- user profile
- admin dashboard <br />

## Technologies: 

|Backend | Frontend |
| --- | --- |
| node.js | react.js |
| express.js | redux |
| mongoDB | react-dom |
| stripe |  react-stripe-js |
| bcryptjs | paypal-js |
| cookie-session | sass|
| JWT | peact-parallax |
| | animation on scroll |
 
 
## Usage: 

### Demo
Watch live [here](https://www.youtube.com/watch?v=b24oov0fmkw)

### User usage: 
To start shopping you need to create an user account.<br/>
Note: To test paypal payment method you need to have your own developer account in paypal.

### Admin usage: 
To have access to admin dashboard login as admin with forfard credentials:<br/>
login: admin@admin.com 
password: admin@admin.com 

## Development

### Running application:
Make sure you have own credentials in server/.env for:
- MONGO_URI, 
- PORT
- JWT_SECRET_KEY
- STRIPE_SECRET_KEY 

1. Clone the repo or download it
2. Open your terminal on client folder and run command "npm install"
3. Open your terminal on client folder and run command "npm install"
4. Having terminal open on server run command "npm run app"
5. If you need return web site to initial conditions run command 'npm run seeder-data'

### Note: not responsive
