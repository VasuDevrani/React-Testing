import React from "react";

export default function Greet({ name }: { name?: string }) {
  return (
    <>
      <div>Hello {name}</div>
      <h1>My world</h1>
      <h1>Your world</h1>
      <h2>Our world</h2>
    </>
  );
}
