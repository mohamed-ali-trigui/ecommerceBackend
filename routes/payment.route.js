const express=require('express');
const router = express.Router();
const stripe = require ('stripe');
const Stripe =
stripe('sk_test_51NnLuAFmo9vMoTF7N44cFHq190iiiK1V8mfkvUwPzPyLL2dB92qHdIlCPVE4qnvN9hpZXqHoaQqiMMqKFkqZLsTR00KIFdYQ37');
router.post('/', async (req, res) => {
    let status, error;
    const { token, amount } = req.body;
    try {
    await Stripe.charges.create({
    source: token.id,
    amount,
    currency: 'usd',
    });
    status = 'success';
    } catch (error) {
    console.log(error);
    status = 'Failure';
    }
    res.json({ error, status });
});
module.exports = router;

