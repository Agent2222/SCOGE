// Import Stripe with the secret key from environment variables
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

module.exports = async (req, res) => {
  if (req.method === 'POST') {
    const { lineItems } = req.body; // Get the lineItems from the request body
    try {
      // Create the checkout session with Stripe
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
        return_url: `https://www.scoge.co/order.html?session_id={CHECKOUT_SESSION_ID}`,
      });

      // Return the session ID and other data to the frontend
      res.status(200).json({ clientSecret: session.client_secret });
    } catch (error) {
      // Handle any errors
      res.status(500).json({ error: error.message });
    }
  } else {
    // If the method is not POST, return a 405 Method Not Allowed response
    res.status(405).json({ message: 'Method not allowed' });
  }
};
