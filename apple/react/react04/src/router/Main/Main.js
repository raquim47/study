import React, { useEffect, useRef, useState } from "react";
import Banner from "../../components/Banner/Banner";
const Main = (props) => {
  useEffect(() => {
    props.setNavIndex("");
  }, []);
  useEffect(() => {
    props.setUserColor("");
    props.setUnmount(false);
  });
  return (
    <>
      <Banner unmount={props.unmount} />
    </>
  );
};

export default Main;
