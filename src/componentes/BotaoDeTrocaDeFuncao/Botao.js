
import './Botao.css';

const Botao = ({ onChangeView }) => {
  return (
    <div className="botoesDeTrocaDeFuncao">
      <button onClick={() => onChangeView('painel')} className="botaoDeQuadros">Quadros</button>
      <button onClick={() => onChangeView('lista')} className="botaoDeLista">Lista</button>
      <button onClick={() => onChangeView('dashboard')} className="botaoDeDashboard">Dashboard</button>
    </div>
  );
}

export default Botao;
