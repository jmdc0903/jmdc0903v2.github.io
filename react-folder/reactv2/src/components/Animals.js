import Animal from "./partials/Animal";
const Animals = () => {
  const animals = [
    {
      type: "Dog",
      icon: "🐶",
      size: "small",
    },
    {
      type: "Cat",
      icon: "😺",
      size: "small",
    },
    {
      type: "Tiger",
      icon: "🐯",
      size: "medium",
    },
    {
      type: "Monkey",
      icon: "🐵",
      size: "medium",
    },
  ];
  return (
    <ul>
      {animals.map((animal) => (
        <Animal type={animal.type} icon={animal.icon} size={animal.size} />
      ))}
    </ul>
  );
};

export default Animals;
<div>
  <h1>Animals</h1>
</div>;
