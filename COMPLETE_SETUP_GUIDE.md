# Complete Razorpay Integration Setup Guide
## Mom Without A Manual - Step by Step

---

## **PART 1: PREREQUISITES**

### What You Need:
1. ✅ GitHub account (free at github.com)
2. ✅ Netlify account (free at netlify.com)
3. ✅ All project files (already created)
4. ✅ Node.js installed on your computer

---

## **PART 2: INSTALL NODE.JS**

### Step 2.1: Download Node.js
1. Open browser and go to: **https://nodejs.org**
2. Click the green **LTS** button
3. Download the installer for your OS (Mac/Windows/Linux)
4. Save to Downloads folder

### Step 2.2: Install Node.js
**For Mac:**
1. Open Downloads folder
2. Double-click the `.pkg` file
3. Click **Continue** → **Agree** → **Install**
4. Enter your Mac password when prompted
5. Click **Close** when installation finishes

**For Windows:**
1. Double-click the `.msi` file
2. Click **Next** → **I Agree** → **Next**
3. Click **Install** and wait for completion
4. Click **Finish**

### Step 2.3: Verify Installation
Open Terminal (Mac) or Command Prompt (Windows):

**Mac:** Press `Command + Space`, type `terminal`, press Enter

**Windows:** Press `Windows + R`, type `cmd`, press Enter

Then type:
```bash
node --version
```

Should show: `v20.x.x` or higher

---

## **PART 3: SET UP PROJECT FOLDER**

### Step 3.1: Create Project Folder
Create a new folder on your computer called: `mom-without-manual`

### Step 3.2: Place All Files
Copy these files into that folder:
```
mom-without-manual/
├── mom-without-manual-replica.html
├── package.json
├── netlify.toml
├── .env.local.example
├── .gitignore
├── RAZORPAY_SETUP.md
└── netlify/
    └── functions/
        ├── create-order.js
        └── verify-payment.js
```

---

## **PART 4: LOCAL SETUP & TESTING**

### Step 4.1: Open Terminal in Project Folder

**For Mac:**
1. Open Terminal
2. Type: `cd Desktop/mom-without-manual` (or wherever you saved it)
3. Press Enter

**For Windows:**
1. Open Command Prompt
2. Type: `cd Desktop\mom-without-manual`
3. Press Enter

Verify you're in correct folder:
```bash
ls
```
(Mac) or
```bash
dir
```
(Windows)

You should see your files listed.

### Step 4.2: Install Dependencies
Type and press Enter:
```bash
npm install
```

Wait 2-3 minutes. When done, you should see:
```
added X packages
```

### Step 4.3: Create .env.local File
Type and press Enter:
```bash
cp .env.local.example .env.local
```

**Windows users:** Use this instead:
```bash
copy .env.local.example .env.local
```

Verify it was created:
```bash
cat .env.local
```

You should see:
```
RAZORPAY_KEY_ID=rzp_test_T9SssIp5818KVK
RAZORPAY_KEY_SECRET=wckIbdrRu1sAKgTXSzobJzz3
```

### Step 4.4: Install Netlify CLI
Type and press Enter:
```bash
npm install -g netlify-cli
```

### Step 4.5: Start Local Server
Type and press Enter:
```bash
netlify dev
```

Wait for message:
```
◈ Local server is listening on 8888
```

### Step 4.6: Test Website Locally
1. Open browser
2. Go to: `http://localhost:8888`
3. You should see your website
4. Scroll to **Support Our Journey** section
5. Test the payment form

### Step 4.7: Test Payment Button
1. Enter email: `test@example.com`
2. Enter phone: `9876543210` (optional)
3. Select amount: `₹100`
4. Click **Pay Now**

You should see Razorpay modal open.

### Step 4.8: Complete Test Payment
Use test card details:
```
Card Number: 4111 1111 1111 1111
Expiry: 12/25
CVV: 123
OTP: 000000 (when asked)
```

Expected result: Success message appears, form resets.

### Step 4.9: Stop Local Server
In Terminal, press:
```
Ctrl + C
```

You should see: `^C` and return to terminal prompt.

---

## **PART 5: PUSH TO GITHUB**

### Step 5.1: Create GitHub Account
1. Go to: **https://github.com/signup**
2. Create account (free)
3. Verify email

### Step 5.2: Create New Repository
1. Go to: **https://github.com/new**
2. Repository name: `mom-without-manual`
3. Leave everything default
4. Click **Create repository**

### Step 5.3: Initialize Git Locally
In your Terminal (in project folder), type:
```bash
git init
```

### Step 5.4: Add Files to Git
Type:
```bash
git add .
```

### Step 5.5: Check What's Being Added
Type:
```bash
git status
```

You should see all files listed. Verify `.env.local` is NOT listed (it's hidden by .gitignore).

### Step 5.6: Create First Commit
Type:
```bash
git commit -m "Initial commit: Website with Razorpay payments"
```

### Step 5.7: Rename Main Branch
Type:
```bash
git branch -M main
```

### Step 5.8: Add GitHub Remote
Copy the URL from your GitHub repository page (looks like `https://github.com/YOUR_USERNAME/mom-without-manual.git`)

Type:
```bash
git remote add origin https://github.com/YOUR_USERNAME/mom-without-manual.git
```

Replace `YOUR_USERNAME` with your actual GitHub username.

### Step 5.9: Push to GitHub
Type:
```bash
git push -u origin main
```

You'll be asked to authenticate. Follow GitHub's instructions.

---

## **PART 6: DEPLOY TO NETLIFY**

### Step 6.1: Create Netlify Account
1. Go to: **https://app.netlify.com**
2. Click **Sign up**
3. Choose **Sign up with GitHub**
4. Authorize Netlify

### Step 6.2: Connect Repository
1. In Netlify dashboard, click **Add new site**
2. Click **Import an existing project**
3. Choose **GitHub**
4. Select your `mom-without-manual` repository
5. Leave build settings empty (static site)
6. Click **Deploy site**

Wait 1-2 minutes for deployment.

### Step 6.3: Get Your Site URL
After deployment completes, you'll see:
```
https://your-site-name.netlify.app
```

Copy this URL.

---

## **PART 7: ADD ENVIRONMENT VARIABLES**

### Step 7.1: Go to Site Settings
1. In Netlify dashboard, select your site
2. Click **Site settings**
3. Go to **Build & Deploy**
4. Click **Environment** (left menu)

### Step 7.2: Add First Variable
1. Click **Edit variables**
2. Click **Add variable**
3. Key: `RAZORPAY_KEY_ID`
4. Value: `rzp_test_T9SssIp5818KVK`
5. Click **Save**

### Step 7.3: Add Second Variable
1. Click **Add variable** again
2. Key: `RAZORPAY_KEY_SECRET`
3. Value: `wckIbdrRu1sAKgTXSzobJzz3`
4. Click **Save**

### Step 7.4: Redeploy Site
1. Go back to **Deploys** tab
2. Click **Trigger deploy**
3. Click **Deploy site**

Wait 1-2 minutes for redeploy.

---

## **PART 8: TEST LIVE WEBSITE**

### Step 8.1: Open Your Live Site
1. Go to your Netlify URL: `https://your-site-name.netlify.app`
2. Website should load (may take 10 seconds first time)

### Step 8.2: Test Payment Section
1. Scroll to **Support Our Journey**
2. You should see the payment form

### Step 8.3: Test Payment Flow
1. Enter email: `test@example.com`
2. Enter phone: `9876543210`
3. Select amount: `₹250`
4. Click **Pay Now**

Razorpay modal should open.

### Step 8.4: Complete Test Payment
1. Use test card: `4111 1111 1111 1111`
2. Expiry: `12/25`
3. CVV: `123`
4. OTP: `000000`
5. Click **Pay**

Expected: Success message.

### Step 8.5: Verify in Razorpay Dashboard
1. Go to: **https://dashboard.razorpay.com**
2. Login with your Razorpay account
3. Go to **Payments** → **Orders**
4. You should see your test order there

---

## **PART 9: SWITCH TO LIVE PAYMENTS (Optional)**

### Step 9.1: Get Live Keys from Razorpay
1. Open Razorpay dashboard
2. Settings → API Keys
3. Click **Live** tab
4. Copy your `key_id` and `key_secret`

### Step 9.2: Update Netlify Variables
1. Go to Netlify site settings
2. Environment variables
3. Edit `RAZORPAY_KEY_ID` → paste your live key_id
4. Edit `RAZORPAY_KEY_SECRET` → paste your live key_secret
5. Save and trigger redeploy

### Step 9.3: Update Frontend Key
1. Open `mom-without-manual-replica.html`
2. Find line: `const RAZORPAY_KEY_ID = 'rzp_test_T9SssIp5818KVK';`
3. Replace with: `const RAZORPAY_KEY_ID = 'rzp_live_YOUR_KEY_HERE';`
4. Save file
5. Push to GitHub: 
   ```bash
   git add .
   git commit -m "Switch to live payments"
   git push
   ```
6. Netlify auto-deploys

---

## **TROUBLESHOOTING**

### Problem: npm: command not found
**Solution:** Node.js not installed. Go back to Part 2 and install it.

### Problem: "Cannot find module 'razorpay'"
**Solution:** Run `npm install` in your project folder (Part 4.2)

### Problem: Razorpay modal doesn't open
**Solution:** 
1. Press F12 (Developer Tools)
2. Go to Console tab
3. Check for error messages
4. Verify RAZORPAY_KEY_ID is correct in HTML

### Problem: "Payment verification failed"
**Solution:** 
1. Check Netlify environment variables are set correctly
2. Verify RAZORPAY_KEY_SECRET matches in Netlify
3. Trigger redeploy

### Problem: Functions return 500 error
**Solution:**
1. Go to Netlify dashboard
2. Click **Functions** tab
3. View logs to see exact error
4. Check environment variables

### Problem: "Port 8888 already in use"
**Solution:** Run with different port:
```bash
netlify dev --port 3000
```

---

## **QUICK REFERENCE COMMANDS**

### Terminal Commands Used:
```bash
# Navigate to folder
cd Desktop/mom-without-manual

# Check files
ls (Mac) or dir (Windows)

# Install packages
npm install

# Create env file
cp .env.local.example .env.local

# Start local server
netlify dev

# Stop server
Ctrl + C

# Git commands
git init
git add .
git status
git commit -m "message"
git branch -M main
git remote add origin URL
git push -u origin main
```

---

## **SUCCESS CHECKLIST**

- [ ] Node.js installed and verified
- [ ] Project folder created with all files
- [ ] npm install completed
- [ ] .env.local created
- [ ] Local server works (netlify dev)
- [ ] Website loads at localhost:8888
- [ ] Payment button works locally
- [ ] GitHub repository created
- [ ] Files pushed to GitHub
- [ ] Netlify site created and connected
- [ ] Environment variables added to Netlify
- [ ] Site redeploy completed
- [ ] Live website loads at Netlify URL
- [ ] Payment button works on live site
- [ ] Test payment completed successfully
- [ ] Order appears in Razorpay dashboard

---

## **SUPPORT**

If you get stuck on any step:
1. Read the error message carefully
2. Check the Troubleshooting section
3. Verify all prerequisites are installed
4. Check Netlify and Razorpay dashboards for clues

**You've got this! 💪**

---

**Last Updated:** July 2026
**Status:** Ready for Production
