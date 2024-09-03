# GrinMatch

GrinMatch is a web application designed to connect current students with alumni for mentorship and networking opportunities. It provides a platform for students and alumni to engage in meaningful connections and foster professional growth.

## Tech Stack - MERN

- **Frontend:**
    - **ReactJS**: A JavaScript library for building user interfaces.
    - **Firebase Auth**: Used for sign up, sign in, log out, user credentials.

- **Backend:**
    - **Node.js**: A JavaScript runtime for building scalable network applications.
    - **Express**
    - **MongoDB**: MongoDB-like NoSQL database for storing user data.

- **Socket.io**: A library for real-time web applications.

- **Deployment:**
    - **Render**: A cloud platform for deploying, managing, and scaling applications.

## MVP Description

The Minimum Viable Product (MVP) for GrinMatch includes the following features:

1. **User Authentication:**
    - **Sign Up/Sign In**: Users can create an account or log in using email and password.
    - **Password Reset**: Users can reset their passwords via email.

2. **User Management:**
    - **Profile Creation**: Users can set up and update their profiles.
    - **Role Management**: Users can be designated as students or alumni, with different access and permissions.

3. **Mentorship Matching:**
    - **Search and Connect**: Users can search for and connect with mentors or mentees based on their profiles and interests.

## Getting Started

### Add environment variables

```dotenv
FIREBASE_AUTH_PROVIDER_CERT_URL=https://www.googleapis.com/oauth2/v1/certs
FIREBASE_AUTH_URI=https://accounts.google.com/o/oauth2/auth
FIREBASE_CLIENT_CERT_URL=https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-q044n%40grinmatch-f46fc.iam.gserviceaccount.com
FIREBASE_CLIENT_EMAIL=
FIREBASE_CLIENT_ID=
FIREBASE_PRIVATE_KEY=
FIREBASE_PRIVATE_KEY_ID=
FIREBASE_PROJECT_ID=grinmatch-f46fc
FIREBASE_TOKEN_URI=https://oauth2.googleapis.com/token
FIREBASE_TYPE=service_account
REACT_APP_FIREBASE_API_KEY=
REACT_APP_FIREBASE_APP_ID=
REACT_APP_FIREBASE_AUTH_DOMAIN=
REACT_APP_FIREBASE_DATABASE_URL=
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=
REACT_APP_FIREBASE_PROJECT_ID=grinmatch-f46fc
REACT_APP_FIREBASE_STORAGE_BUCKET=
```

### Install dependencies

```bash
pnpm install:all
```

### Start the development server

```bash
pnpm start
```

## Contributing

Granted permission to contribute to this project, follow these steps:

1. Fork the repository.
2. Create a feature branch.
3. Make your changes and commit them.
4. Push to the branch and create a pull request.

Upon push will to main will trigger workflow on GitHub Actions. Add `[cancel workflow]` to your commit message to cancel the workflow.
