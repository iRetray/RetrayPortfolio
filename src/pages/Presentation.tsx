import CommandConsole from "../components/CommandConsole";

type PresentationProps = {
  name: string;
  role: string;
  descriptions: string[];
};

const Presentation = ({ name, role, descriptions }: PresentationProps) => (
  <div className="PresentationContainer centerContainer">
    <p className="titleGradient">{name}</p>
    <p className="description">{role}</p>
    <CommandConsole
      title="julianCamilo/MyProfile"
      command="sudo get-profile --developer='Julian Camilo'"
      responseList={descriptions}
    />
  </div>
);

export default Presentation;
