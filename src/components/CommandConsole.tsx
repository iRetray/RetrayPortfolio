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
      <p>{title}</p>
    </div>
    <p>{command}</p>
    {responseList.map((response) => (
      <p>{response}</p>
    ))}
  </div>
);

export default CommandConsole;
