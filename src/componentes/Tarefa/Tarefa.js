const Tarefa = ({titulo, prioridade, descricao, time, responsavel, limite }) =>{

    return(
        <div>
            <h2>{titulo}</h2>
            <p>{prioridade}</p>
            <h2>{descricao}</h2>
            <h2>{time}</h2>
            <h2>{responsavel}</h2>
            <h2>{limite}</h2>
        </div>

    )
}

export default Tarefa