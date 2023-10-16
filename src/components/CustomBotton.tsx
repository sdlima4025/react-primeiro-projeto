// criando Props
type Props = {
  label: string;
  onClick: () => void;
};
// Criando componente
export const CustomBotton = ({ label, onClick }: Props) => {
  return (
    <div>
      <button
        onClick={onClick}
        className="p-3 rounded-md text-white bg-blue-700"
      >
        {label}
      </button>
    </div>
  );
};
