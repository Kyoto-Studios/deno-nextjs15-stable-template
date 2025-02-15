"use client";
// ? REACT Built-in
import { useEffect, useState } from "react";

export default function AppHomePage() {

  // ? useState() Hook
  const [message, setMessage] = useState("Loading...");

  // ? useEffect() Hook
  useEffect(() => {
    fetch("/api/hello")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <>
      <h1>Welcome to Next.js w/ Deno 2.0s!</h1>
      <p>{message}</p>
    </>
  );
}