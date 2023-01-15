import { Outlet } from "@remix-run/react";
import { Navbar } from "~/components";

export default function App() {
  return (
    <>
      <Navbar brand="Pokemon App" />
      <main className="container mx-auto">
        <Outlet />
      </main>
    </>
  );
}
