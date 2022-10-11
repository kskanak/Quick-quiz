import React, { createContext } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

export const TopicsContext = createContext([]);

const Root = () => {
  const data = useLoaderData([]);
  const topics = data.data;

  return (
    <TopicsContext.Provider value={topics}>
      <div>
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    </TopicsContext.Provider>
  );
};

export default Root;
