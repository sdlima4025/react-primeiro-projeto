// CRIANDO PROPS PARA Dog
type Props =  {
    name: string;
    avatar: string;
    raca: string;
    roles: string[];
    
  }
  export const Dog = ({name,avatar,raca, roles}: Props) => {
    return (
      <div className="p-3">
        <h1>Nome: {name}</h1>
        <h2>Raça {raca}</h2>
        <img
         src={avatar} 
         alt={name} 
         className="w-40" 
         />
    <ul>
        <li>{roles[0]}</li>
        <li>{roles[1]}</li>
    </ul>
      </div>
    );
  };
  