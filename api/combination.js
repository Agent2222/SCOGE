const stripe = require('stripe')(process.env.VITE_Combination);

module.exports = async (req, res) => {
  if (req.method === 'POST') {
    try {
      var correctCombination = VITE_Combination.split(','); // The correct 

      // Return the session ID and other data to the frontend
      res.status(200).json({ combination: correctCombination });
    } catch (error) {
      // Handle any errors
      res.status(500).json({ error: error.message });
    }
  } else {
    // If the method is not POST, return a 405 Method Not Allowed response
    res.status(405).json({ message: 'Method not allowed' });
  }
};

