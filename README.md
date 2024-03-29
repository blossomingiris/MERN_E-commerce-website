# E-commerce-website (Full Stack) :shopping:

### Title: "Demeter" 

<img src="https://user-images.githubusercontent.com/102720711/206442450-d07c80b6-ea12-4ffe-986a-b4559b9a9d54.png" width = '500' align = "right"/>


### Description:
Modern e-commerce website for perfumery brand with full functionality, easy navigation and user-friendly interface, attractive and exclusive design </br>

### Features:
:heavy_check_mark: full featured shopping cart </br>
:heavy_check_mark: user sign up and login system </br>
:heavy_check_mark: search and sort products functionality </br>
:heavy_check_mark: stock management </br>
:heavy_check_mark: top carusel products </br>
:heavy_check_mark: checkout process with credit card and paypal </br>
:heavy_check_mark: user profile </br>
:heavy_check_mark: admin dashboard <br />

## Technologies: 

|Backend | Frontend |
| --- | --- |
| node.js | react.js |
| express.js | react redux |
| mongoDB | react-dom |
| stripe |  react-stripe-js |
| bcryptjs | paypal-js |
| cookie-session | sass|
| JWT | react-parallax |
| | animation on scroll |
 
## Usage: 

### Demo:
- Watch video [here](https://www.youtube.com/watch?v=b24oov0fmkw)
- Deployed project is [here](https://demeter-perfume.onrender.com/)

### User usage:
- you can start adding products to the shopping cart, but to place an order you need to create an account 
- after you have created an account, you will have access to the pages: profile, orders and order details
- for checkout, you need to update your user profile page with additional delivery information
- to test the Paypal payment method, you need to have youe own credentials in Paypal account for developers
- to test the credit card payment method: during payment process you can provide any information except the card number, you need to enter the number used for developers: 4242 4242 4242 4242

### Admin usage:
As admin you can:
- have access the admin dashboard, just log in as admin with your login details:<br/>
login: admin@admin.com <br/>
password: admin@admin.com 
- have access to the pages: user list, edit user profile, products, orders and order details
- remove the user from user page
- remove product from products page
- edit the user profile page: change first name, last name, e-mail, as well as assign or remove the administrator role
- update on the order details page delivery status of order with current date, which is automatically reflected on the user's order details page

## Development:

### Running application:
Make sure you have own credentials in server/.env for:
- MONGO_URI
- PORT
- JWT_SECRET_KEY (random string)
- STRIPE_SECRET_KEY
- NODE_ENV = 'development' 

1. Clone the repo or download it
2. Open your terminal on client folder and run command "npm install"
3. Open your terminal on client folder and run command "npm install"
4. Having terminal open on server run command "npm run app"

To return data in website to initial condition on server terminal run command 'npm run seeder-data' :seedling:

### Important: Not responsive
