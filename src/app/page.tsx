import { Dog } from "@/components/Dog";
import { Person } from "@/components/Person";

const Page = () => {
  return (
    <div>
      <h1 className="font-bold text-xl">Olá, Mundo!</h1>
      <h2>Agrupamento de Componentes</h2>

      <Person
        name="Elon Musk"
        avatar="https://classic.exame.com/wp-content/uploads/2021/04/Elon-Musk.jpg"
        roles={["CEO da Tesla", "CEO da SpaceX"]}
      />

      <Person
        name="Jeff Bezos"
        avatar="https://m.media-amazon.com/images/M/MV5BYTNlOGZhYzgtMmE3OC00Y2NiLWFhNWQtNzg5MjRhNTJhZGVmXkEyXkFqcGdeQXVyNzg5MzIyOA@@._V1_.jpg"
        roles={["CEO da Amazon", "CEO da Blue Origin"]}
      />
      <Person
        name="Avatar Padrão"
        roles={["Avatar padrão", "foi utilizado"]}
      />

      <Dog
        name="Brad"
        avatar="https://caocidadao.com.br/wp-content/uploads/2013/08/bulldog-frances_interna.jpg"
        raca="Buldogue"
        roles= {['Campeão 2023', 'Pura Raça']}
      />
    </div>
  );
};

export default Page;

// Passando props para um componente.


// Definindo um valor padrão em props