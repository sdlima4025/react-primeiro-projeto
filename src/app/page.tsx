import {peopleList} from '@/data/peopleList';
import {Card} from "@/components/Card";



const Page = () => {
  // const list = peopleList.map(person => <li>{person.name}</li>)
  return (
  <div>
      <h1 className="font-bold text-xl">React JS</h1>
   
      {peopleList.length > 0 && 
      <ul>
        {peopleList.map(person => 
        <li>{person.id} - {person.name} - {person.profession}</li>)}
      </ul>
      }
  </div>
  );
};

export default Page;

// Passando props para um componente. author="Coach de Milhões"


// Definindo um valor padrão em props