import CommandConsole from "../components/CommandConsole";

type PresentationProps = {
  name: string;
  role: string;
};

const Presentation = ({ name, role }: PresentationProps) => (
  <div className="PresentationContainer centerContainer">
    <p className="titleGradient">{name}</p>
    <p className="description">{role}</p>
    <CommandConsole command="sudo get-profile --developer=='Julian Camilo'" />
  </div>
);

export default Presentation;
