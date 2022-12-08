# E-commerce-website (Fullstack) :shopping:

<img src="https://user-images.githubusercontent.com/102720711/206442450-d07c80b6-ea12-4ffe-986a-b4559b9a9d54.png" width = '500' align = "right"/> 

### Title: "Demeter" 

### Description:
Modern e-commerce website for perfumery brand with full functionality, easy navigation and user-friendly interface, attractive and unique design </br>

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

### Demo:
Watch live [here](https://www.youtube.com/watch?v=b24oov0fmkw)

<img src="https://user-images.githubusercontent.com/102720711/206447030-20ed7a9a-6cad-4e2e-93be-145c674f6b62.png" width = '500' align = "right"/> 

### User usage: 
To start shopping you need to create an user account.<br/>
Note: To test paypal payment method you need to have your own developer account in paypal.

### Admin usage: 
To have access to admin dashboard login as admin with forfard credentials:<br/>
login: admin@admin.com 
password: admin@admin.com 

## Development:

### Running application:
Make sure you have own credentials in server/.env for:
- MONGO_URI
<img src="https://user-images.githubusercontent.com/102720711/206450354-44fafd37-d522-4f60-a01d-5de28dce693f.png" width = '500' align = "right"/> 
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
