import {peopleList} from '@/data/peopleList';

const Page = () => {
  // const list = peopleList.map(person => <li>{person.name}</li>)
  const chemists = peopleList.filter(person => person.profession === 'cheminist');
  return (
  <div>
      <h1 className="font-bold text-xl">React JS</h1>
   
      {/* {peopleList.length > 0 && 
      <ul>
        {peopleList.map(person => 
        <li>{person.id} - {person.name} - {person.profession}</li>)}
      </ul>
      } */}

      {chemists.length > 0 &&
        <>
          <h3>Lista de Quimicos:</h3>
          <ul>
            {chemists.map(person =>
              <li key={person.id}>{person.name}</li>
              )}
          </ul>
        </>
      }
  </div>
  );
};

export default Page;

// Passando props para um componente. author="Coach de Milhões"
// Definindo um valor padrão em props