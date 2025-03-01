import React from "react";
import CardContainer from "./CardContainer.jsx";

import { useContext } from "react";
import { UserContext } from "../context/UserContext.jsx";


const Home = () => {
  const { user } = useContext(UserContext)

  return (
    <>
    <h1 className="text-success text-center fw-bold my-2">Welcome {user ? user : "Guest"}</h1>
      <CardContainer />
      <CardContainer />
    </>
  );
};

export default Home;
