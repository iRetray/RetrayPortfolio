import CommandConsole from "../components/CommandConsole";

const responseList: string[] = ["Hola", "Que", "Se", "dice"];

type PresentationProps = {
  name: string;
  role: string;
};

const Presentation = ({ name, role }: PresentationProps) => (
  <div className="PresentationContainer centerContainer">
    <p className="titleGradient">{name}</p>
    <p className="description">{role}</p>
    <CommandConsole
      title="home/retray"
      command="sudo get-profile --developer=='Julian Camilo'"
      responseList={responseList}
    />
  </div>
);

export default Presentation;
