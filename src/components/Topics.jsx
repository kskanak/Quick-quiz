import React, { useContext } from "react";
import { TopicsContext } from "../layout/Root";
import Topic from "./Topic";

const Topics = () => {
  const topics = useContext(TopicsContext);
  return (
    <div className="bg-gray-400">
      <div className="topics-header text-center py-5 text-3xl font-semibold">
        <h2 className="">Topics List</h2>
      </div>
      <div className="  topics grid md:grid-cols-2 lg:grid-cols-4 pl-10 lg:pl-5 lg:pr-4  py-10">
        {topics.map((topic) => (
          <Topic key={topic.id} topic={topic}></Topic>
        ))}
      </div>
    </div>
  );
};

export default Topics;
