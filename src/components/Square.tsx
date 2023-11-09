import { useEffect } from "react";

export const Square = () => {
  useEffect(() => {
    window.addEventListener('scroll', () => {});
    console.log('Adicionou Event')

    return () => {
      window.removeEventListener('scroll', () => {});
      console.log('Limpou Event')
    }
  });

  return <div className="w-52 h-52 bg-orange-700 text-white"></div>;
};
