#!/bin/bash

# Start the Express server in the background
node server.js &
SERVER_PID=$!

# Start Vite
npm run dev

# Cleanup on exit
trap "kill $SERVER_PID" EXIT
