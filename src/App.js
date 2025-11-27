import Botao from './componentes/BotaoDeTrocaDeFuncao/Botao';
import ListaDeTarefas from './componentes/ListaDeTarefas/ListaDeTarefas';
import Cabecalho from './componentes/Cabecalho/Cabecalho';
import React, { useState } from 'react';  
import Dashboard from './componentes/DashBoard/DashBoard';
import Formulario from './componentes/Formulario/Formulario';
import Tarefa from './componentes/Tarefa/Tarefa';

const App = () => {
  const [view, setView] = useState('lista')
  const [Tarefas, setTarefa] = useState([])

  const aoNovaTarefaAdicionada = (Tarefa) => {
     debugger   
     setTarefa([...Tarefas, Tarefa])
  }

  return (
    <div>
      <Cabecalho onChangeView={setView} onClick='CadastrarTarefa' />
      <Botao onChangeView={setView} />
      {view === 'CadastrarTarefa' && <Formulario aoTarefaCadastrada={Tarefa => aoNovaTarefaAdicionada(Tarefa)} />}
      {view === 'lista' && (tarefa => <ListaDeTarefas titulo={tarefa.titulo} tarefas={Tarefas.filter(tarefa => tarefa.ListaDeTarefas === ListaDeTarefas.titulo)} />)}
      {view === 'dashboard' && <Dashboard />}
    </div>
  );
}

export default App;