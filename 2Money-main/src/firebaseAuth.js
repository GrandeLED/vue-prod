// firebaseAuth.js
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from "./firebase"; // Здесь импортируется ваша конфигурация Firebase

const auth = getAuth(app);

const googleSignIn = async () => {
  const provider = new GoogleAuthProvider();
  
  try {
    const result = await signInWithPopup(auth, provider);
    console.log("Успешный вход:", result.user); // В консоли выведется информация о пользователе
  } catch (error) {
    console.error("Ошибка входа:", error);
  }
};

export { googleSignIn };
