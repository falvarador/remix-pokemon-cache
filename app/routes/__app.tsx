import { Container } from "@nextui-org/react";
import { Outlet } from "@remix-run/react";
import { Navbar } from "~/components";

export default function App() {
  return (
    <>
      <Navbar brand="Pokemon App" />
      <Container
        css={{
          maxW: "80%",
        }}
      >
        <Outlet />
      </Container>
    </>
  );
}
