import './PainelDeTarefas.css';
import Tarefa from "../Tarefas/Tarefa";

const PainelDeTarefas = () => {
    return(

        <main className="painelDeTarefas">
        <section className="coluna1">
                <p className='status'>A Fazer</p>
                <div className="Tarefa">
                <Tarefa />
                <Tarefa />
                </div>
        </section>
        <section className="coluna2">
                <p className='status'>Em Progresso</p>
                <div className="Tarefa">
                <Tarefa />
                </div>
        </section>
        <section className="coluna3">
            <p className='status'>Em Revisão</p>
            <div className="Tarefa">
                <Tarefa />
                </div>
        </section>
        <section className="coluna4">
            <p className='status'>Concluído</p>
            <div className="Tarefa">
                <Tarefa />
                </div>
        </section>
       </main>

    );

}
export default PainelDeTarefas;