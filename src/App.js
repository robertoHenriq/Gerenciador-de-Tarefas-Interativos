import Botao from './componentes/BotaoDeTrocaDeFuncao/Botao';
import PainelDeTarefas from './componentes/PainelTarefas/PainelDeTarefas';
import ListaDeTarefas from './componentes/ListaDeTarefas/ListaDeTarefas';
import Cabecalho from './componentes/Cabecalho/Cabecalho';
import React, { useState } from 'react';  
import Dashboard from './componentes/DashBoard/DashBoard';

const App = () => {
  const [view, setView] = useState('painel');

  return (
    <div>
      <Cabecalho />
      <Botao onChangeView={setView} />
      {view === 'painel' && <PainelDeTarefas />}
      {view === 'lista' && <ListaDeTarefas />}
      {view === 'dashboard' && <Dashboard />}
    </div>
  );
}

export default App;
// ...existing code...