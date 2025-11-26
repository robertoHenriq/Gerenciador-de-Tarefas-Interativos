import Botao from './componentes/BotaoDeTrocaDeFuncao/Botao';
import PainelDeTarefas from './componentes/PainelTarefas/PainelDeTarefas';
import ListaDeTarefas from './componentes/ListaDeTarefas/ListaDeTarefas';
import Cabecalho from './componentes/Cabecalho/Cabecalho';
import React, { useState } from 'react';  
import Dashboard from './componentes/DashBoard/DashBoard';
import Formulario from './componentes/Formulario/Formulario';

const App = () => {
  const [view, setView] = useState('painel');

  const [task, setTask] = useState([]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddTask = (newTask) => {
    const newId = task.leght +1;
    const taskWithId = { id: newId, ...newTask};

    setTask([...task, taskWithId]);
    setIsModalOpen(false);
  };

  return (
    <div>
      <Cabecalho 
                onChangeView={setView} 
                onOpenModal={() => setIsModalOpen(true)} // Prop para o botão no cabeçalho
            />
            
            {/* Renderização condicional do Formulário como Modal */}
            {isModalOpen && (
                <Formulario 
                    onclose={() => setIsModalOpen(false)} 
                    onAddTask={handleAddTask} // Passa a função de adição de tarefas
                />
            )}
      {view === 'painel' && <PainelDeTarefas task={task}/>}
      {view === 'lista' && <ListaDeTarefas task={task}/>}
      {view === 'dashboard' && <Dashboard />}
    </div>
  );
}

export default App;