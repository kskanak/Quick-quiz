import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Quiestion from "./Quiestion";

const Quiz = () => {
  const data = useLoaderData();
  const quizData = data.data;
  const { id, name, logo, questions } = quizData;
  const [correct, setCorrect] = useState([]);
  const [wrong, setWrong] = useState([]);
  console.log(correct, wrong);
  return (
    <div className="text-center py-4 text-3xl font-semibold bg-gray-400 px-3">
      <h2>Welcome to {name} Quiz</h2>
      <div className="topic-img flex justify-center h-20 my-2 ">
        <img src={logo} alt="" className="rounded" />
      </div>

      <div className="questions-container grid md:grid-cols-4">
        <div className="quiestions md:col-span-3">
          {questions.map((quiestion) => (
            <Quiestion
              key={quiestion.id}
              quiestionSet={quiestion}
              setCorrect={setCorrect}
              correct={correct}
              wrong={wrong}
              setWrong={setWrong}
            ></Quiestion>
          ))}
        </div>
        {/* Quiz result shows */}

        <div className="quiz-result bg-slate-900 order-first md:order-last md:h-screen mt-10 rounded py-5">
          <div className="correctAnsShow">
            <h2 className="text-green-600 my-2 ">
              Correct Ans
              <span className=" border px-2 bg-green-600 rounded text-lg text-white mx-2">
                {correct.length}
              </span>
            </h2>
            {correct.map((correctAns) => (
              <li className="text-green-600 text-sm">{correctAns}</li>
            ))}
          </div>

          <div className="wrongAnsShow">
            <h2 className="text-red-300 my-2 ">
              Wrong Ans
              <span className=" border px-2 bg-red-600 rounded text-lg text-white mx-2">
                {correct.length}
              </span>
            </h2>
            {wrong.map((wrongAns) => (
              <li className="text-red-600 text-sm">{wrongAns}</li>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
<h2>Quizes </h2>;
