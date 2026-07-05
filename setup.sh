#!/bin/bash
cd ~/Downloads/mom-without-manual
rm -rf .git
git init
git config user.email "akkashpandey29@gmail.com"
git config user.name "Akash Pandey"
git add .
git commit -m "Initial commit: Website with Razorpay payments"
git branch -M main
git remote add origin https://github.com/responsiq/mom-without-manual.git
git push -u origin main
echo "✅ Done! Your code is now on GitHub"
