const Razorpay = require('razorpay');

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

exports.handler = async (event, context) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  try {
    const body = JSON.parse(event.body);
    const { amount, description, email, phone } = body;

    // Validate amount (minimum 100 paise = 1 INR)
    if (!amount || amount < 100) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          error: 'Invalid amount. Minimum amount is 100 paise (₹1)',
        }),
      };
    }

    // Validate email
    if (!email) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Email is required' }),
      };
    }

    // Create order
    const options = {
      amount: amount, // Amount in paise
      currency: 'INR',
      receipt: `receipt_${Date.now()}`,
      description: description || 'Payment for Mom Without A Manual',
      customer_notify: 1,
      notes: {
        email: email,
        phone: phone || '',
      },
    };

    const order = await razorpay.orders.create(options);

    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        orderId: order.id,
        amount: order.amount,
        currency: order.currency,
        receipt: order.receipt,
      }),
    };
  } catch (error) {
    console.error('Razorpay API Error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: 'Failed to create order',
        message: error.message,
      }),
    };
  }
};
