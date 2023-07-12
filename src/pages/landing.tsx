import React from "react";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div>
      <h2>Landing Page</h2>
      <Link to="/signin">Sign In</Link>
      <Link to="/signup">Sign Up</Link>
    </div>
  );
}
