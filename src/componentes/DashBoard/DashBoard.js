import './DashBoard.css';

const Dashboard = () => {
    return(
        <section className="DashBoard">
        <div className='colunaDashboard1'>
            <p>Total de Tarefas</p>
            <p>5</p>
            <p>Todas as tarefas cadastradas</p>
        </div>

        <div className='colunaDashBoard2'>
            <p>Concluídas</p>
            <p>1</p>
            <p>Total</p>
        </div>

        <div className='colunaDashBoard3'>
            <p>Em Progresso</p>
            <p>1</p>
            <p>Tarefas em andamento</p>
        </div>

        <div className='colunaDashBoard4'>
            <p>Atrasadas</p>
            <p>1</p>
            <p>Precisão de atenção</p>
        </div>
        </section>
);

}

export default Dashboard;