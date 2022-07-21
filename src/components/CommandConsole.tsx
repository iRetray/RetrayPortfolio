import { RiTerminalBoxFill } from "react-icons/ri";

type CommandConsoleProps = {
  title: string;
  command: string;
  responseList: string[] | JSX.Element[];
};

const CommandConsole = ({
  title,
  command,
  responseList,
}: CommandConsoleProps): JSX.Element => (
  <div className="CommandConsoleContainer">
    <div className="header">
      <div className="icons">
        <div className="icon red"></div>
        <div className="icon yellow"></div>
        <div className="icon green"></div>
      </div>
      <div className="windowTitle">
        <div style={{ marginRight: "8px" }}>
          <RiTerminalBoxFill style={{ fontSize: "21px" }} />
        </div>
        <p>{title}</p>
      </div>
    </div>
    <div className="consoleLines animate__slideInLeft">
      <p className="codeLine">
        <span className="number">1</span>{" "}
        <span style={{ fontWeight: "bold", color: "#28fd13" }}>{command}</span>
      </p>
      {responseList.map((response, index) => (
        <p className="codeLine">
          <span className="number">{index + 2}</span> {response}
        </p>
      ))}
    </div>
  </div>
);

export default CommandConsole;
