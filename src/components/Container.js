import React from "react";

export default function Container({ children, className, renderAs = "div" }) {
  const Div = renderAs;
  return (
    <Div
      className={"mx-5 md:mx-0 w-full md:w-640 lg:w-768 xl:w-1024 " + className}
    >
      {children}
    </Div>
  );
}
