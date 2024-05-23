import './index.css'

function Card(props) {
  return (
    <div className="card-container">
      <h1 className="cidade">{props.cidade}</h1>
      <div>
        <p className="descricao">{props.temperatura}</p>
        <p className="descricao">{props.descricao}</p>
      </div>
    </div>
  );
} 

export default Card;