import Tarefa from "../Tarefa/Tarefa";

const ListaDeTarefas = ({ tarefas, titulo }) => {
  return (

      (tarefas.length > 0) ? <section>
                                <h3>{titulo}</h3>
                                <div className='colaboradores'>
                                    {tarefas.map( tarefa => <Tarefa key={Tarefa.titulo} titulo={Tarefa.titulo} /> )}
                                </div>
                            </section> 
    :''
  
  )
}
export default ListaDeTarefas;