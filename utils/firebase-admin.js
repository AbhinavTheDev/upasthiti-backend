import admin from "firebase-admin";

let firebaseAdmin;
try {
  firebaseAdmin = admin.initializeApp({
    credential: admin.credential.cert({
      project_id: process.env.FIREBASE_PROJECT_ID,
      client_email: process.env.FIREBASE_CLIENT_EMAIL,
      private_key: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
    }),
  });
} catch (error) {
  console.log("Firebase Admin error:", error);
}

export { firebaseAdmin };
