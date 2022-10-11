import React from "react";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

const Quiestion = ({ quiestionSet, correct, setCorrect, wrong, setWrong }) => {
  const { correctAnswer, id, options, question } = quiestionSet;

  const setQuestion = question.split("<")[1].split(">")[1];

  const handleSelect = (ans, e) => {
    if (ans === correctAnswer) {
      toast.success("Correct Answer");
      e.currentTarget.classList.add("bg-green-500");
      const allCorrect = [...correct, ans];
      setCorrect(allCorrect);
    } else {
      toast.error("Wrong Ans");
      const allWrong = [...wrong, ans];
      setWrong(allWrong);
      e.currentTarget.classList.add("bg-red-500");
    }
  };

  const handleEye = () => {
    toast.info(`Correct Ans : ${correctAnswer}`);
  };

  return (
    <div className="bg-gray-500 mx-4 my-10 relative shadow-sky-400 shadow-lg  rounded-lg ">
      <h2 className="text-xl p-3 w-full md:w-4/5 h-32">
        <span className="font-bold">Quiz</span> : {setQuestion}
      </h2>
      <button
        onClick={handleEye}
        title="Correct Ans"
        className="md:absolute right-12 top-12 my-2 md:my-2"
      >
        <FontAwesomeIcon icon={faEye} />
      </button>

      <div className="options grid md:grid-cols-2 p-4 bg-slate-700 text-lg rounded-lg">
        {options.map((option, index) => (
          <button
            onClick={(e) => handleSelect(option, e)}
            key={index}
            className="border p-4 m-1 rounded text-white hover:bg-emerald-500"
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Quiestion;
