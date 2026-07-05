# Razorpay Payment Integration Setup

## Overview
Razorpay payment gateway has been integrated into your Mom Without A Manual website using Netlify Functions.

## Files Created

### Backend (Netlify Functions)
- `netlify/functions/create-order.js` - Creates Razorpay order
- `netlify/functions/verify-payment.js` - Verifies payment signature

### Configuration
- `netlify.toml` - Netlify configuration for functions
- `package.json` - Node.js dependencies
- `.env.local.example` - Environment variables template
- `.gitignore` - Git ignore rules

### Frontend
- `mom-without-manual-replica.html` - Updated with payment section and Razorpay integration

---

## Setup Instructions

### Step 1: Install Dependencies
```bash
npm install
```

This installs:
- `razorpay` - Razorpay SDK for backend

### Step 2: Create Environment Variables
1. Copy `.env.local.example` to `.env.local`:
   ```bash
   cp .env.local.example .env.local
   ```

2. Verify the credentials in `.env.local`:
   ```
   RAZORPAY_KEY_ID=rzp_test_T9SssIp5818KVK
   RAZORPAY_KEY_SECRET=wckIbdrRu1sAKgTXSzobJzz3
   ```

### Step 3: Deploy to Netlify

#### Option A: Using Netlify CLI
```bash
# Install Netlify CLI if not already installed
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy
netlify deploy --prod
```

#### Option B: Connect GitHub Repository
1. Push your code to GitHub
2. Go to https://app.netlify.com
3. Click "New site from Git"
4. Connect your GitHub repository
5. Set build settings:
   - Build command: (leave empty for static site)
   - Publish directory: `.` (current directory)
6. Add environment variables in Netlify dashboard:
   - Go to Settings → Build & Deploy → Environment
   - Add `RAZORPAY_KEY_ID` and `RAZORPAY_KEY_SECRET`

### Step 4: Set Environment Variables in Netlify
After deploying, add environment variables in Netlify dashboard:
1. Site settings → Build & Deploy → Environment variables
2. Add:
   - `RAZORPAY_KEY_ID`: `rzp_test_T9SssIp5818KVK`
   - `RAZORPAY_KEY_SECRET`: `wckIbdrRu1sAKgTXSzobJzz3`

---

## Testing the Integration

### Local Testing
```bash
# Install and run Netlify Functions locally
npm install -g netlify-cli
netlify dev
```

This starts a local server at `http://localhost:8888`

### Test Payment Steps
1. Open http://localhost:8888 (or your deployed site)
2. Scroll to "Support Our Journey" section
3. Enter test email and select amount
4. Click "Pay Now"
5. Use these test credentials:
   - Email: `test@example.com`
   - Card: `4111 1111 1111 1111` (Visa)
   - Expiry: `12/25`
   - CVV: `123`

---

## API Endpoints

### Create Order
**Endpoint:** `/.netlify/functions/create-order`  
**Method:** `POST`  
**Body:**
```json
{
  "amount": 10000,      // Amount in paise (₹100)
  "description": "Support Mom Without A Manual",
  "email": "user@example.com",
  "phone": "+91XXXXXXXXXX"
}
```

**Response:**
```json
{
  "success": true,
  "orderId": "order_XXXXX",
  "amount": 10000,
  "currency": "INR"
}
```

### Verify Payment
**Endpoint:** `/.netlify/functions/verify-payment`  
**Method:** `POST`  
**Body:**
```json
{
  "razorpay_payment_id": "pay_XXXXX",
  "razorpay_order_id": "order_XXXXX",
  "razorpay_signature": "signature_hash"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Payment verified successfully",
  "paymentId": "pay_XXXXX",
  "orderId": "order_XXXXX"
}
```

---

## Security Notes

⚠️ **Important Security Points:**
1. `RAZORPAY_KEY_SECRET` is stored only on Netlify backend, never sent to frontend
2. Frontend only has access to `RAZORPAY_KEY_ID` (embedded in HTML)
3. Payment signature verification happens on backend only
4. Add `.env.local` to `.gitignore` (already done)
5. Never commit secrets to GitHub

---

## Supported Test Cards

**Visa:**
- Card: `4111 1111 1111 1111`
- Expiry: `12/25`
- CVV: `123`

**MasterCard:**
- Card: `5555 5555 5555 4444`
- Expiry: `12/25`
- CVV: `123`

---

## Troubleshooting

### Error: "Failed to create order"
- Check if environment variables are set in Netlify dashboard
- Verify credentials are correct
- Check browser console for details

### Error: "Payment verification failed"
- Ensure `RAZORPAY_KEY_SECRET` is set correctly
- Check if payment details are being sent correctly
- Verify Razorpay API status

### Error: "RAZORPAY_KEY_ID not found"
- Environment variables may not be loaded
- Redeploy to Netlify
- Clear browser cache

### Orders not being created
- Check Netlify Function logs in dashboard
- Verify network tab in browser dev tools
- Ensure amount is >= 100 paise (₹1)

---

## Next Steps

1. ✅ Functions are set up and working
2. ✅ HTML payment form is ready
3. Add database to track payments (optional)
4. Send email confirmations (optional)
5. Add webhooks for payment updates (optional)

---

## Support

For issues with Razorpay integration:
- Razorpay Docs: https://razorpay.com/docs/
- Netlify Functions: https://docs.netlify.com/functions/overview/

---

**Status:** ✅ Ready to Deploy
