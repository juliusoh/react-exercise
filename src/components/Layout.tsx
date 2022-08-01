import { Container } from "@mui/system";
import { AnySoaRecord } from "dns";
import React, { PropsWithChildren } from "react";
import Navbar from "./Navbar";

export default function Layout(props: PropsWithChildren) {
  return (
    <>
      <Navbar />
      <Container>
        <div className="flex flex-col min-h-[100vh] sm:flex-row">{props.children}</div>
      </Container>
    </>
  );
}
