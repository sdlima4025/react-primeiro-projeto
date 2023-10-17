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