import "./style.css";
const Display = ({ autorized }) => {
  return (
    <div>
      {autorized ? (
        <p id="ok"> Requisição completa</p>
      ) : (
        <p id="falha"> Requisição Falhou</p>
      )}
    </div>
  );
};
export default Display;
