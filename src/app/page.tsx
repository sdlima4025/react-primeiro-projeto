import { Card } from "@/components/Card";
import { Circle } from "@/components/Circle";

const Page = () => {
  return (
  <div>
      <h1 className="font-bold text-xl">Children Componentes</h1>
      
      <Card>
        <div>
          <h3 className="text-3xl font-bold italic">Frase de Efeito</h3>
          <p className="text-right text-sm">Autor Desconhecido</p>
          <Circle/>
        </div>
      </Card>
  </div>
  );
};

export default Page;

// Passando props para um componente.


// Definindo um valor padrão em props