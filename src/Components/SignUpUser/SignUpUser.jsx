import React from "react";
import { Link } from "react-router-dom";
import { useRef } from "react";
export default function SignUpUser() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  console.log(emailRef);
  return (
    <div>
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Email
        </label>
        <input
          ref={emailRef}
          type="email"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          ref={passwordRef}
        >
          Password
        </label>
        <input
          type="password"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          ref={passwordConfirmRef}
        >
          Re-enter Password
        </label>
        <input
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
