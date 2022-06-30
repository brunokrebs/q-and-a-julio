import { Summary } from "./Summary";

export const Header = () => {
  return (
    <div className="flex place-content-between">
      <div>
        <h1 className="text-3xl font-bold">Tachometer</h1>
        <p>Measure your task-completion velocity.</p>
      </div>
      <Summary />
    </div>
  );
};
