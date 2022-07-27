import React, { PropsWithChildren } from "react";
import Navbar from "./Navbar";

export default function Layout(props: PropsWithChildren) {
  return (
    <>
      <div className="layout">
        <div className="children">{props.children}</div>
      </div>
    </>
  );
}
