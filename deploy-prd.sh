#!/bin/bash

# ════════════════════════════════════════════════════════════
#  PRODUCTION DEPLOYMENT — Has A Niche Portfolio Frontend
#  URL: https://hasaniche.com
# ════════════════════════════════════════════════════════════

APP_DIR="/home/deploy/apps/hasaniche-frontend"
PM2_APP_NAME="hasaniche-frontend"
PORT=3000

echo "══════════════════════════════════════════"
echo "🚀 [PRD] Has A Niche Frontend Deployment"
echo "══════════════════════════════════════════"

echo "📂 Moving to $APP_DIR..."
cd $APP_DIR || { echo "❌ Error: Directory not found!"; exit 1; }

echo "⬇️  Pulling latest code from origin/main..."
git pull origin main || { echo "❌ Error: Git pull failed!"; exit 1; }

echo "📦 Installing dependencies..."
npm ci || { echo "❌ Error: npm ci failed!"; exit 1; }

echo "🏗️  Building Next.js app..."
npm run build || { echo "❌ Error: Build failed!"; exit 1; }

echo "🔄 Restarting in PM2..."
pm2 restart $PM2_APP_NAME \
  || pm2 start npm --name $PM2_APP_NAME -- start -- -p $PORT

sleep 2

echo "📜 Live logs (CTRL+C to exit):"
pm2 logs $PM2_APP_NAME --lines 20