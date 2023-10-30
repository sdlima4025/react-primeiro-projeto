// /** GALERIA DE FOTOS */

// "use client";

// import { PhotoItem } from "@/components/PhotoItem";
// import { photoList } from "@/data/photoList";
// import { useState } from "react";
// import { Photo } from '../types/Photo';
// import { Modal } from "@/components/Modal";

// const Page = () => {
//   const [showModal, setShowModal] = useState(false);
//   const [imageOfModal, setImageOfModal] = useState('');
//   const openModal = (id: number) => {
//     const photo = photoList.find(item => item.id === id);
//     if(photo){
//       setImageOfModal(photo.url);
//       setShowModal(true);
//     }
//   }

//   const closeModal = () => {
//     setShowModal(false);
//   }
//   return (
//     <div className="mx-2">
//       <h1 className="text-center text-3xl font-bold my-10">
//         Modal de Fotos
//       </h1>
//       <section className="container max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {photoList.map((item) => (
//           <PhotoItem
//             key={item.id}
//             photo={item}
//             onClick={() => openModal(item.id)}
//           />
//         ))}
//       </section>

//       {showModal &&
//       <Modal image={imageOfModal} closeModal={closeModal}/>
//       }
//     </div>
//   );
// };
// export default Page;

/** Exercicio: Quiz */

"use client";

import { QuestionItem } from "@/components/QuestionItem";
import { questions } from '@/data/questions';
import { useState } from "react";

const Page = () => {
  const [currentQuestion, setcurrentQuestion] = useState(0);
  const title = "Quiz Biblico";

  const handleAnswer = (answer: number) => {

  }
  return (
    <div className="w-full h-screen flex justify-center items-center bg-blue-600">
      <div className="w-full max-w-xl rounded-md bg-white text-black shadow shadow-black">
        <div className="p-5 font-bold text-2xl border-b border-gray-300">
          {title}
        </div>
        <div className="p-5">
          <QuestionItem
            question={questions[currentQuestion]}
            count={currentQuestion + 1}
            onAnswer={handleAnswer}
          />
        </div>
        <div className="p-5 text-center border-t border-gray-300">
        {currentQuestion + 1} de {questions.length} pergunta{questions.length === 1 ? '' : 's'}
        </div>
      </div>
    </div>
  );
};

export default Page;
