import React from "react";
import { Link, Navigate } from "react-router-dom";

export default function Landing() {
  return (
    <div>
      <h2>Landing Page</h2>
      <Link to="/signup">
        {" "}
        Sign Up
      </Link>
    </div>
  );
}
