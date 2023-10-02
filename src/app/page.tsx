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

import { EmojiRating } from "@/components/EmojiRating";

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

/** Exercício: Rating via emoji (fácil) | (dificil) */
const Page = () => {
  return (
  <div className="w-screen h-screen flex justify-center items-center">
       <EmojiRating rate={2}/>
  </div>
  );
}

export default Page;