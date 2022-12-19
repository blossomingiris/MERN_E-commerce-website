# E-commerce-website (Full Stack) :shopping:

### Title: "Demeter" 

<img src="https://user-images.githubusercontent.com/102720711/206442450-d07c80b6-ea12-4ffe-986a-b4559b9a9d54.png" width = '500' align = "right"/>


### Description:
Modern e-commerce website for perfumery brand with full functionality, easy navigation and user-friendly interface, attractive and exclusive design </br>

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
| JWT | react-parallax |
| | animation on scroll |
 
## Usage: 

### Demo:
Watch video [here](https://www.youtube.com/watch?v=b24oov0fmkw)

### User usage: 
- you can start adding products to the shopping cart, but to place an order you need to create an account 
- after you have created an account, you will have access to the pages: user profile, user orders and order details
- for checkout, you need to update your user profile page with additional delivery information
- to test the Paypal payment method, you need to have a separate developer account with Paypal
- to test the credit card payment method: you can fill in the fields with any information except the card number field, you need to enter the number used for developers: 4242 4242 4242 4242

### Admin usage: 
- to access the admin dashboard, log in as admin with your login details:<br/>
login: admin@admin.com 
password: admin@admin.com 
- you have access to the pages: user list, products, orders and order details
- you can remove the user from the user page
- on the order details page, you can update the delivery status of the order, which is automatically displayed on the user's order details page

## Development:

### Running application:
Make sure you have own credentials in server/.env for:
- MONGO_URI
- PORT
- JWT_SECRET_KEY
- STRIPE_SECRET_KEY
- NODE_ENV = 'development' 

1. Clone the repo or download it
2. Open your terminal on client folder and run command "npm install"
3. Open your terminal on client folder and run command "npm install"
4. Having terminal open on server run command "npm run app"
5. If you need return web site to initial conditions run command 'npm run seeder-data'

### Note: not responsive
