require('dotenv').config
const stripe = require('stripe')

const Stripe = stripe(process.env.STRIPE_SECRET_KEY)
const payForOrder = async (req, res, next) => {
  try {
    const line_items = req.body.cartItems.map((item) => {
      return {
        price_data: {
          currency: 'eur',
          product_data: {
            name: item.name,
          },
          unit_amount: item.price * 100,
        },
        quantity: item.quantity,
      }
    })
    const session = await Stripe.checkout.sessions.create({
      line_items,
      mode: 'payment',
      success_url: 'http://localhost:3000/checkout-success',
      cancel_url: 'http://localhost:3000/cart',
    })
    res.send({ url: session.url })
  } catch (err) {
    next(err)
  }
}

module.exports = {
  payForOrder,
}
