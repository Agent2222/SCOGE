// This is your test secret API key.
const express = require('express');
const app = express();
import path from 'path';
import { fileURLToPath } from 'url';
require('dotenv').config();
app.use(express.static('dist'));
app.use(express.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const stripe = require('stripe')(process.env.VITE_StripeKey);

const YOUR_DOMAIN = 'https://www.scoge.co';
const PORT = process.env.PORT || 5173;

function allowCrossDomain(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
  res.header('Access-Control-Allow-Headers', 'Content-Type')
  next()
}

// Serve any static files
app.use(allowCrossDomain)
app.use('/', express.static(__dirname + '/dist'))

app.post('/create-checkout-session', async (req, res) => {
  const { lineItems } = req.body; 
  try {
    const session = await stripe.checkout.sessions.create({
        ui_mode: 'embedded',
        metadata: {
        size: 'Large',
        },
        submit_type: 'pay',
        billing_address_collection: 'auto',
        shipping_address_collection: {
        allowed_countries: ['US', 'CA'],
        },
        line_items: lineItems,
        mode: 'payment',
        return_url: `${YOUR_DOMAIN}/order.html?session_id={CHECKOUT_SESSION_ID}`,
    });

        res.send({clientSecret: session.client_secret});
    } catch (error) {
            res.status(500).send({error: error.message});
    }
});

app.get('/session-status', async (req, res) => {
  const session = await stripe.checkout.sessions.retrieve(req.query.session_id);

  res.send({
    status: session.status,
    customer_email: session.customer_details.email
  });
});

app.listen(PORT, () => console.log('Running on port 5173'));