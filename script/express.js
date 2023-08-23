const Paystack = require('paystack');
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

const paystack = Paystack(sk_live_f4ce681ecb88677787f9e9e2d548d05582b4d489);

app.get('/check-balance', async (req, res) => {
  try {
    const balance = await paystack.balance.get();
    res.json(balance);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching balance' });
  }
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
