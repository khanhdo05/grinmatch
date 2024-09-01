# Backend for GrinMatch App

## Overview

This project contains the backend logic for the GrinMatch App. It is built using Firebase Cloud Functions with Node.js and TypeScript, and integrates with Firestore for data storage.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Setup](#setup)
- [Deployment](#deployment)
- [Testing](#testing)

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or later)
- [Firebase CLI](https://firebase.google.com/docs/cli) (install via `pnpm i firebase-tools`)
- [pnpm](https://pnpm.io/) (use pnpm for package management)

## Setup

- Create a .env file in the functions/ directory to manage your environment variables.
```.dotenv
FIREBASE_TYPE=service_account
FIREBASE_PROJECT_ID=grinmatch-f46fc
FIREBASE_PRIVATE_KEY_ID=TO-BE-COMPLETED
FIREBASE_PRIVATE_KEY=TO-BE-COMPLETED
FIREBASE_CLIENT_EMAIL=TO-BE-COMPLETED
FIREBASE_CLIENT_ID=111618552881813196837
FIREBASE_AUTH_URI=https://accounts.google.com/o/oauth2/auth
FIREBASE_TOKEN_URI=https://oauth2.googleapis.com/token
FIREBASE_AUTH_PROVIDER_CERT_URL=https://www.googleapis.com/oauth2/v1/certs
FIREBASE_CLIENT_CERT_URL=https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-q044n%40grinmatch-f46fc.iam.gserviceaccount.com
DATABASE_URL=https://grinmatch-f46fc-default-rtdb.firebaseio.com
```

- Install dependencies
```
pnpm i
```

## Deployment

- Deploy functions and hosting
```
firebase deploy --only functions
```
- Deploy hosting only
```
firebase deploy --only hosting
```

## Testing


