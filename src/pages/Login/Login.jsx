import React from "react";
import LoginUser from "../../Components/LoginUser/loginUser";

import { Link } from "react-router-dom";

export default function Login() {
  // const login = async () => {};

  return (
    <section>
      <LoginUser />
      <Link to="/signup">Don't have a account ?</Link>
    </section>
  );
}
