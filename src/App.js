import Botao from './componentes/BotaoDeTrocaDeFuncao/Botao';
import PainelDeTarefas from './componentes/PainelTarefas/PainelDeTarefas';
import ListaDeTarefas from './componentes/ListaDeTarefas/ListaDeTarefas';
import Cabecalho from './componentes/Cabecalho/Cabecalho';
import React, { useState } from 'react';  
import Dashboard from './componentes/DashBoard/DashBoard';
import Formulario from './componentes/Formulario/Formulario';

const App = () => {
  const [view, setView] = useState('painel');

  return (
    <div>
      <Cabecalho onChangeView={setView} />
      <Botao onChangeView={setView} />
      {view === 'Formulario' && <Formulario onClose={() => setView('painel')} />}
      {view === 'painel' && <PainelDeTarefas />}
      {view === 'lista' && <ListaDeTarefas />}
      {view === 'dashboard' && <Dashboard />}
    </div>
  );
}

export default App;