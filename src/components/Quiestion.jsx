import React from "react";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

const Quiestion = ({ quiestionSet }) => {
  const { correctAnswer, id, options, question } = quiestionSet;

  const setQuestion = question.split("<")[1].split(">")[1];

  const handleSelect = (ans, e) => {
    if (ans === correctAnswer) {
      toast.success("Correct Answer");
      e.currentTarget.classList.add("bg-green-500");
    } else {
      toast.error("Wrong Ans");
      e.currentTarget.classList.add("bg-red-500");
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
        {options.map((option, index) => (
          <button
            onClick={(e) => handleSelect(option, e)}
            key={index}
            className="border p-4 m-1 rounded text-white hover:bg-blue-300"
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Quiestion;
