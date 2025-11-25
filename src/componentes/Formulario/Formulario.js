const Formulario = ({onclose}) => {
    return (
        <div className="overlay" onClick={onclose}>
            <div className="modal">
            <h2>Formulario</h2> 
            </div>
            <form>
                <label>Título:</label>
                <input type="text" name="titulo" />
                <label>Descrição:</label>
                <textarea name="descricao"></textarea>
                <label>Prioridade:</label>
                <select name="prioridade">
                    <option>Baixa</option>
                    <option>Média</option>
                    <option>Alta</option>
                </select>
                <select name="Time">
                    <option>Front-End</option>
                    <option>Back-End</option>
                    <option>Design</option>
                    <option>Website</option>
                </select>
                <button type="submit">Adicionar Tarefa</button>
            </form>
        </div>
    );
}
export default Formulario;