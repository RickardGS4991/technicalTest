import * as admin from 'firebase-admin';
import dotenv from 'dotenv';

dotenv.config();

class FirebaseGlobal {
  private static firestoreInstance: admin.firestore.Firestore;
  private constructor() {}

  public static getFirestore(): admin.firestore.Firestore {
    if (!FirebaseGlobal.firestoreInstance) {
      admin.initializeApp({
        credential: admin.credential.cert({
          projectId: process.env.FIREBASE_PROJECT_ID,
          privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
          clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
        }),
      });
      FirebaseGlobal.firestoreInstance = admin.firestore();
    }
    return FirebaseGlobal.firestoreInstance;
  }
}

export default FirebaseGlobal;