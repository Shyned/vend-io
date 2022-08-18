import React, { useState } from "react";
import { useRef } from "react";
import { Navigate } from "react-router-dom";
// firebase 
import { collection, addDoc } from "firebase/firestore";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth , app , database } from "../../firebaseConfig";


export default function LoginUser() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  // firebsae collections
  const collectionRef = collection(database, "user")

const handlesubmit = ()=> {
addDoc(collectionRef, {
  email : emailRef,
  password : passwordRef
})
.then(() => {alert(" Data Added")})
.catch((err) => { alert(err.message)})
}
console.log(emailRef)
console.log(passwordRef)


  const signIn = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const user = await signInWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      );
    } catch (err) {
      setError(err.message);
    }

    setLoading(false);
    document.getElementById("login-form").reset();
  };
  console.log(error);
  return (
    <div>
      {" "}
      {error && alert(error)}
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handlesubmit}
        id="login-form"
      >
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Email
        </label>
        <input
          ref={emailRef}
          type="email"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Password
        </label>
        <input
          ref={passwordRef}
          type="password"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <button type="submit" className="bg-orange-600">
          Submit
        </button>
      </form>
    </div>
  );
}
