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
export default Page */

/** O que é um state?
 *
 * */

"use client";

const Page = () => {
  let count = 0;

  const handleClickButton = () => {
    count++;
    console.log(count);
  };

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <p>{count}</p>
      <button onClick={handleClickButton} className="bg-blue-500 p-3">
        +1
      </button>
    </div>
  );
};

export default Page;
