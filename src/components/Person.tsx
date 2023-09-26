const getweekday = (today: Date) => {
  return new Intl.DateTimeFormat("pt-BR", { weekday: "long" }).format(
    new Date(today)
  );
};
export const Person = () => {
  const name: string = "Elon Musk";
  const avatar: string =
    "https://classic.exame.com/wp-content/uploads/2021/04/Elon-Musk.jpg";
  const today: Date = new Date();
  return (
    <>
      <h1 style={{ color: "red", fontSize: "30px" }}>
        Nome: {name} - {getweekday(today)}
      </h1>
      <img src={avatar} alt={name} className="w-40" />
      <ul>
        <li>CEO da Tesla</li>
        <li>CEO da SpaceX</li>
        <li>CEO da Unix</li>
      </ul>
    </>
  );
};
