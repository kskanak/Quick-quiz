import React from "react";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

const Quiestion = ({ quiestionSet }) => {
  const { correctAnswer, id, options, question } = quiestionSet;
  const [first, second, third, fourth] = options;
  const setQuestion = question.split("<")[1].split(">")[1];

  const handleSelect = (ans) => {
    if (ans === correctAnswer) {
      toast.success("Correct Answer");
    } else {
      console.log("not corrent");
    }
  };

  const handleEye = () => {
    toast.info(`Correct Ans : ${correctAnswer}`);
  };

  return (
    <div className="bg-gray-500 mx-4 my-10 relative">
      <h2 className="text-2xl p-3 ">Quiz: {setQuestion}</h2>
      <button onClick={handleEye} className="absolute right-12 top-4">
        <FontAwesomeIcon icon={faEye} />
      </button>

      <div className="options grid md:grid-cols-2 p-4 bg-slate-700 text-lg">
        {options.map((option) => (
          <button onClick={() => handleSelect(option)} key={option.id}>
            <div className="border p-4 m-1 rounded text-white hover:bg-blue-300">
              {option}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Quiestion;
