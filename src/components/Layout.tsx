import React, { PropsWithChildren } from "react";
import Navbar from "./Navbar";

export default function Layout(props: PropsWithChildren) {
  return (
    <>
      <Navbar />
      <div className="pl-[24px] pr-[24px] max-w-[1200px] w-[100%] ml-[20%]">
        <div className="flex min-h-[100vh]">{props.children}</div>
      </div>
    </>
  );
}
