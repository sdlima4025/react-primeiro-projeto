This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


Anotações  
/** const Page = () => {
  const fullTime = new Intl.DateTimeFormat('pt-BR',{
    timeStyle:'short',
    hour12: false
  }).format();

const hour = new Date().getHours();
 testando as horas 
   const hour = 15;

  let greeting = '0';

  if(hour >=0 && hour < 12) {
    greeting = 'Bom Dia 😀';
  } else if (hour >= 12 && hour < 18) {
    greeting = 'Boa Tarde 😎';
  } else if(hour >= 18 && hour <= 24)  {
    greeting = 'Boa Noite 😴';
  }
  return (
  <div className="w-screen h-screen flex flex-col justify-center items-center
  text-white bg-gradient-to-r from-sky-500 to-indigo-500">
      <div className="text-9xl">{fullTime}</div>
      <div className="text-5xl font-bold">{greeting}</div>
  </div>
  );
};

export default Page;
*/

//import { EmojiRating } from "@/components/EmojiRating";

/** Exercício: Greeting condicional 2 
 * 

  const Page = () => {
  const fullTime = new Intl.DateTimeFormat('pt-BR',{
    timeStyle:'short',
    hour12: false
  }).format();

  const hour = new Date().getHours();
 
  return (
  <div className="w-screen h-screen flex flex-col justify-center items-center
  text-white bg-gradient-to-r from-sky-500 to-indigo-500">
      <div className="text-9xl">{fullTime}</div>
      <div className="text-5xl font-bold"></div>
      {hour >= 0 && hour < 12 && 'Bom Dia 😀'}
      {hour >= 12 && hour < 18 && 'Boa Tarde 😎'}
      {hour >= 18 && hour <= 23 && 'Boa Noite 😴'}
  </div>
  );
};

export default Page;
*/

/** Exercício: Rating via emoji (fácil) | (dificil) 

import { StudentTable } from "@/components/StudentTable";
import { students } from "@/data/students";

const Page = () => {
  return (
  <div className="container mx-auto ">
    <h1 className="text-5xl mb-5">Boletim Escolar 2023</h1>
    <StudentTable students={students}/>
  </div>
  );
}

export default Page;
*/

/** Adicionando evento de clique 
"use client"; // server component

 const Page = () => {
  // Evento de click com arrow function
  const handleButtonClick = () => {
    alert('Funcionou! 4');
  }
  return (
  <div className="w-screen h-screen flex justify-center items-center">
    <button onClick={handleButtonClick} className="p-3 bg-blue-700 text-white rounded-md">Clique Aqui</button>
  </div>
  );
}

export default Page; */

/** Passando Evento via Props 
"use client";
import { CustomBotton } from "@/components/CustomBotton";

 // server component

 const Page = () => {
  // Evento de click com arrow function
  const handleButton1 = () => alert('Funcionou 1!');
  const handleButton2 = () => alert('Funcionou 2!');
  const handleButton3 = () => alert('Funcionou 3!');
  
  return (
  <div className="w-screen h-screen flex justify-center items-center">
    <CustomBotton label="Clique Aqui!" onClick={handleButton1}/>
    <CustomBotton label="Clique Aqui!" onClick={handleButton2}/>
    <CustomBotton label="Clique Aqui!" onClick={handleButton3}/>
  </div>
  );
}

export default Page; */

/** Usando preventDefault 

"use client";

import { FormEvent } from "react";

 const Page = () => {

  const handleFormSubmit = (event:FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert('Opa mandando...');
  }
  return (
  <div className="w-screen h-screen flex flex-col justify-center items-center">
    <h1 className="text-5xl mb-3">Form Login</h1>
    <form onSubmit={handleFormSubmit}>
      <input type="text" />
      <input type="submit" value='Enviar' />
    </form>
  </div>
  );
}
*/

/** O que é um state?
 * handleClickButton
 * */

 /** const Page = () => {
  const fullTime = new Intl.DateTimeFormat('pt-BR',{
    timeStyle:'short',
    hour12: false
  }).format();

const hour = new Date().getHours();
 testando as horas 
   const hour = 15;

  let greeting = '0';

  if(hour >=0 && hour < 12) {
    greeting = 'Bom Dia 😀';
  } else if (hour >= 12 && hour < 18) {
    greeting = 'Boa Tarde 😎';
  } else if(hour >= 18 && hour <= 24)  {
    greeting = 'Boa Noite 😴';
  }
  return (
  <div className="w-screen h-screen flex flex-col justify-center items-center
  text-white bg-gradient-to-r from-sky-500 to-indigo-500">
      <div className="text-9xl">{fullTime}</div>
      <div className="text-5xl font-bold">{greeting}</div>
  </div>
  );
};

export default Page;
*/

//import { EmojiRating } from "@/components/EmojiRating";

/** Exercício: Greeting condicional 2 
 * 

  const Page = () => {
  const fullTime = new Intl.DateTimeFormat('pt-BR',{
    timeStyle:'short',
    hour12: false
  }).format();

  const hour = new Date().getHours();
 
  return (
  <div className="w-screen h-screen flex flex-col justify-center items-center
  text-white bg-gradient-to-r from-sky-500 to-indigo-500">
      <div className="text-9xl">{fullTime}</div>
      <div className="text-5xl font-bold"></div>
      {hour >= 0 && hour < 12 && 'Bom Dia 😀'}
      {hour >= 12 && hour < 18 && 'Boa Tarde 😎'}
      {hour >= 18 && hour <= 23 && 'Boa Noite 😴'}
  </div>
  );
};

export default Page;
*/

/** Exercício: Rating via emoji (fácil) | (dificil) 

import { StudentTable } from "@/components/StudentTable";
import { students } from "@/data/students";

const Page = () => {
  return (
  <div className="container mx-auto ">
    <h1 className="text-5xl mb-5">Boletim Escolar 2023</h1>
    <StudentTable students={students}/>
  </div>
  );
}

export default Page;
*/

/** Adicionando evento de clique 
"use client"; // server component

 const Page = () => {
  // Evento de click com arrow function
  const handleButtonClick = () => {
    alert('Funcionou! 4');
  }
  return (
  <div className="w-screen h-screen flex justify-center items-center">
    <button onClick={handleButtonClick} className="p-3 bg-blue-700 text-white rounded-md">Clique Aqui</button>
  </div>
  );
}

export default Page; */

/** Passando Evento via Props 
"use client";
import { CustomBotton } from "@/components/CustomBotton";

 // server component

 const Page = () => {
  // Evento de click com arrow function
  const handleButton1 = () => alert('Funcionou 1!');
  const handleButton2 = () => alert('Funcionou 2!');
  const handleButton3 = () => alert('Funcionou 3!');
  
  return (
  <div className="w-screen h-screen flex justify-center items-center">
    <CustomBotton label="Clique Aqui!" onClick={handleButton1}/>
    <CustomBotton label="Clique Aqui!" onClick={handleButton2}/>
    <CustomBotton label="Clique Aqui!" onClick={handleButton3}/>
  </div>
  );
}

export default Page; */

/** Usando preventDefault 

"use client";

import { FormEvent } from "react";

 const Page = () => {

  const handleFormSubmit = (event:FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert('Opa mandando...');
  }
  return (
  <div className="w-screen h-screen flex flex-col justify-center items-center">
    <h1 className="text-5xl mb-3">Form Login</h1>
    <form onSubmit={handleFormSubmit}>
      <input type="text" />
      <input type="submit" value='Enviar' />
    </form>
  </div>
  );
}
*/

/** O que é um state?
 * handleClickButton
 * 

"use client";

import { useState } from "react";

const Page = () => {
  const [count, setCount] = useState(1);
  
  const handleBtnClick = () => {
    setCount(count + 2);
    
  };

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center text-3xl">
      <p>{count}</p>
      <button onClick={handleBtnClick} className="bg-blue-700 text-white p-3 rounded-md">+2
      </button>
    </div>
  );
};

export default Page; */

/** Atualizando Objetos em States */
// "use client";

// import { Person } from "@/types/Person";
// import { useState } from "react";

// const Page = () => {
  // criando state
  // const [fullName, setFullName] = useState<Person>({name: 'Sérgio', lastName: 'Lima'});
  // modificando OO com state, clonando OO com spread?
//   const handleClearInput = () => {
//     setFullName({ name: '', lastName: ''})
//   }
//   return (
//     <div className="w-screen h-screen flex flex-col justify-center items-center text-3xl">
     
//      <input
//      type="text"
//      placeholder="Nome"
//      className="border border-black p-3 text-2xl text-black rounded-md mb-3"
//      value={fullName.name} 
//      onChange={e => setFullName({...fullName, name: e.target.value})}
//      />

//      <input
//      type="text"
//      placeholder="sobreNome"
//      className="border border-black p-3 text-2xl text-black rounded-md mb-3"
//      value={fullName.lastName}
//      onChange={e => setFullName({...fullName, lastName: e.target.value})}
//      />


//      <p>Meu nome é:</p>
//      <p>{fullName.name} {fullName.lastName}</p>

//      <button onClick={handleClearInput}>Limpar Inputs</button>
//     </div>
//   )
// }
// export default Page;

/** Módulo 3: (NOVO) Estados e Eventos
23 aulas
#1: Adicionando evento de clique
Os manipuladores de eventos são uma parte importante do React. 
Saiba mais sobre outros manipuladores de eventos, 
como o "onClick", "onDrag", "onHover" ou o evento "onKeyPress".

#2: Forma errada de passar eventos
#3: Passando eventos via props
#4: Usando o preventDefault
#5: O que é um State?
#6: Trabalhando com States
#7: Usando states para auxiliar UI
#8: Usando states em campos
#9: States mudando no tempo
#10: State Updater
#11: Atualizando Objetos em States
/** 
 #13: Arrays em States: Adicionar
 #14: Arrays em States: Excluir
 #15: Arrays em States: Alterar
 #16: Arrays em States: Usando ID
 /*12: Arrays em States: Exibir
 *13: Arrays em States: Adicionar
 
"use client";

import { TodoItem } from "@/types/TodoItem";
import { useState } from "react";

const Page = () => {
  const [itemInput, setItemInput] = useState("");
  const [list, setList] = useState<TodoItem[]>([
    { id: 1, label: "Fazer dever de casa", checked: true },
    { id: 2, label: "Comprar frutas", checked: false },
  ]);

  const handleAddButton = () => {
    if(itemInput.trim()  === '') return;
    setList([...list, { id:list.length + 1, label: itemInput, checked: false }]);
    setItemInput('');
  }

  const deleteItem = (id: number) => {
    setList(
      list.filter(item => item.id !== id)
      );
  }

  const toggleItem = (id: number) => {
    let newList = [...list]

        for(let i in newList){
          if(newList[i].id === id){
            newList[i].checked = !newList[i].checked;
          }
        }

      setList(newList)
    }

  

  return (
    <div className="w-screen h-screen flex flex-col items-center text-2xl">
      <h1 className="text-4xl mt-5">Lista de Tarefas</h1>

      <div className="flex w-full max-w-lg my-3 p-4 rounded-md bg-gray-700 border-2">
        <input
          type="text"
          placeholder="O que deseja fazer?"
          className="flex-1 border border-black p-3 text-2xl text-black rounded-md mr-3"
          value={itemInput}
          onChange={e => setItemInput(e.target.value)}
        />
        <button onClick={handleAddButton}>Adicionar</button>
      </div>

        <p>{list.length} Itens na Lista</p>

      <ul className="w-full max-w-lg list-disc pl-5">
        {list.map(item => (
          <li key={item.id}>
            <input onClick={() => toggleItem(item.id)} type="checkbox" checked={item.checked} className="w-6 h-6 mr-3"/>
            {item.label} - <button onClick={() => deleteItem (item.id)} className="hover:underline">[deletar]</button>
          </li>
        ))}
      </ul>

    </div>
  );
}

export default Page; */
 #17: Exercício: Galeria de Fotos 1
 
 #18: Exercício: Galeria de Fotos 2
 #19: Exercício: Galeria de Fotos 3
 #20: Exercício: Quiz 1
 #21: Exercício: Quiz 2
 #22: Exercício: Quiz Completo 1
 #23: Exercício: Quiz Completo 2 
 

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

// "use client";

// import { QuestionItem } from "@/components/QuestionItem";
// import { Results } from "@/components/Results";
// import { questions } from "@/data/questions";
// import { useState } from "react";

// const Page = () => {
//   const [answers, setAnswers] = useState<number[]>([]);
//   const [currentQuestion, setcurrentQuestion] = useState(0);
//   const [showResult, setShowResult] = useState(false);

//   const title = "Quiz Biblico";

//   const loadNextQuestion = () => {
//     if (questions[currentQuestion + 1]) {
//       setcurrentQuestion(currentQuestion + 1);
//     } else {
//       setShowResult(true);
//     }
//   };

//   const handleAnswer = (answer: number) => {
//     setAnswers([...answers, answer]);
//     loadNextQuestion();
//   };
//   // REINICIANDO O QUIZ
//   const handleReatarButton = () => {
//     setAnswers([]);
//     setcurrentQuestion(0);
//     setShowResult(false);
//   };

//   return (
//     <div className="w-full h-screen flex justify-center items-center bg-blue-600">
//       <div className="w-full max-w-xl rounded-md bg-white text-black shadow shadow-black">
//         <div className="p-5 font-bold text-2xl border-b border-gray-300">
//           {title}
//         </div>
//         <div className="p-5">
//           {!showResult && (
//             <QuestionItem
//               question={questions[currentQuestion]}
//               count={currentQuestion + 1}
//               onAnswer={handleAnswer}
//             />
//           )}
//           {showResult && <Results questions={questions} answers={answers} />}
//         </div>
//         <div className="p-5 text-center border-t border-gray-300">
//           {!showResult &&
//             `${currentQuestion + 1} de ${questions.length} pergunta${
//               questions.length === 1 ? "" : "s"
//             }`}
//           {showResult && (
//             <button
//               onClick={handleReatarButton}
//               className="px-2 py-2 rounded-md bg-blue-800 text-white"
//             >
//               Reiniciar Quiz
//             </button>
          // )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Page;

/* 
"use client"

import { useEffect, useState } from "react";

const Page = () => {
const [firstName, setFirstName] = useState('Gilton');
const [lastName, setlastName] = useState('Santana');

const fullName = firstName + ' ' + lastName;
 

  return(
    <div className="">
      <p>Meu nome é: {fullName} </p>
      <hr />
      <button className="border border-blue-400 m-3 p-3" onClick={() => setFirstName('Silvio')}> Mudar para Silvio</button>
      <button className="border border-blue-400 m-3 p-3"  onClick={() => setlastName('Lima')}> Mudar para Sérgio</button>
      {/* <button className="border border-blue-400 m-3 p-3"  onClick={() => setAge(10)}> Mudar para 10 anos.</button>
      <button className="border border-blue-400 m-3 p-3"  onClick={() => setAge(90)}> Mudar para 90 anos.</button> */}
//     </div>
//   );
// }

// export default Page; 
*/