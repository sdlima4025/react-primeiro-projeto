import { Question } from "@/types/Question";
import { useState } from "react";

type Props = {
  question: Question;
  count: number;
  onAnswer: (answer: number) => void;
};

export const QuestionItem = ({ question, count, onAnswer }: Props) => {
    const [selectedAnswer, setSelectAnswer] = useState<number | null>(null);
    const [check, setCheck] = useState<boolean>(false)

    const checkQuestion = (key: number) => {
        if(selectedAnswer === null) {
            setSelectAnswer(key);
            setCheck(true)
            setTimeout(() => {
                onAnswer(key);
                setSelectAnswer(null);
                setCheck(false)
            }, 2000);
        }
    }
  return (
    <div>
      <div className="text-3xl font-bold mb-5">
        {count}. {question.questions}
      </div>
      <div>
        {question.options.map((item, key) => (
        <div 
          key={key}
          onClick={() => checkQuestion(key)} 
          className= {`border px-3 py-2 rounded-md text-lg mb-4  bg-blue-100 border-blue-300 
          
          ${selectedAnswer !== null ? 'cursor-auto': 'cursor-pointer hover:opacity-60'}
          ${selectedAnswer !== null && selectedAnswer === question.answer && selectedAnswer === key && 'bg-green-100 border-green-300'}
          ${selectedAnswer !== null && selectedAnswer !== question.answer && selectedAnswer === key && 'bg-red-100 border-red-300'}
          `}
          
          
          >
            {item}
           { check && selectedAnswer === key && <div className="text-green-500"> ✔ </div>}
          </div>
        ))}
      </div>
    </div>
  );
};
