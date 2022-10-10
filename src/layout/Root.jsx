import React, { createContext } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import Header from "../components/Header";

export const TopicsContext = createContext([]);

const Root = () => {
  const data = useLoaderData([]);
  const topics = data.data;
  console.log(topics);
  return (
    <TopicsContext.Provider value={topics}>
      <div>
        <Header></Header>
        <Outlet></Outlet>
      </div>
    </TopicsContext.Provider>
  );
};

export default Root;
