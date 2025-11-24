import './PainelDeTarefas.css';
import Tarefa from "../componentes/Tarefas/Tarefa";

function PainelDeTarefas() {
    return(

        <main className="painelDeTarefas">
        <section className="coluna1">
                <div className="Tarefa">
                <Tarefa />
                </div>
        </section>
        <section className="coluna2">
                <div className="Tarefa">
                <Tarefa />
                </div>
        </section>
        <section className="coluna3">
            <div className="Tarefa">
                <Tarefa />
                </div>
        </section>
       </main>

    );

}
export default PainelDeTarefas;