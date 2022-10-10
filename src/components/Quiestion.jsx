import React from "react";

const Quiestion = ({ quiestionSet }) => {
  const { correctAnswer, id, options, question } = quiestionSet;
  const [first, second, third, fourth] = options;
  const setQuestion = question.split("<")[1].split(">")[1];
  console.log(correctAnswer, options);
  return (
    <div className="bg-gray-500 mx-4 my-10">
      <h2 className="text-2xl p-3">Quiz: {setQuestion}</h2>
      <div className="options grid md:grid-cols-2 p-4 bg-slate-700 text-lg">
        {options.map((option) => {
          return (
            <div className="border p-4 m-1 rounded text-white">{option}</div>
          );
        })}
      </div>
    </div>
  );
};

export default Quiestion;
