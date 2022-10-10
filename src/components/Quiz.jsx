import React from "react";
import { useLoaderData } from "react-router-dom";
import Quiestion from "./Quiestion";

const Quiz = () => {
  const data = useLoaderData();
  const quizData = data.data;
  const { id, name, logo, questions } = quizData;
  console.log(questions);
  return (
    <div className="text-center my-2 text-3xl font-semibold">
      <h2>Welcome to {name} Quiz</h2>
      <div className="topic-img flex justify-center h-20 my-2 ">
        <img src={logo} alt="" className="rounded" />
      </div>
      <div className="quiestions">
        {questions.map((quiestion) => (
          <Quiestion key={quiestion.id} quiestionSet={quiestion}></Quiestion>
        ))}
      </div>
    </div>
  );
};

export default Quiz;
<h2>Quizes </h2>;
