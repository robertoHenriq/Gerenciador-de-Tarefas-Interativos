import React, { useState} from "react";

const Formulario = ({ onclose, onAddTask}) => {

    const [ dadosFormulario, setDadosFormulario ] = useState({
        titulo: '',
        descricao: '',
        prioridade: 'Baixa',
        time: 'Front-End',
        colaborador: 'José Roberto',
        data: '10/01/2026'
  });

  const handleChange = (e) =>{
    const {name, value} =e.target;
    setDadosFormulario(prevData => ({
        ...prevData,
        [name]: value,
    }));
  };

  //Metódo para enviar o formulário se a página atualizar- Feito por IA
  const handleSubmit = (e) =>{
    e.preventDefault();

    ondAddTask(dadosFormulario);

    onclose();
  }

    return (
        <div className="overlay" onClick={onclose}>
            <div className="modal" onClick={e => e.stopPropagation()}> 
            <h2>Formulario</h2> 
            </div>
            <form onSubmit={handleSubmit}>
                <label>Título:</label>
                <input type="text"
                       name="titulo"
                       value={dadosFormulario.titulo}
                       onChange={handleChange}
                 />
                       
                <label>Descrição:</label>
                <textarea name="descricao">
                          value={dadosFormulario.descricao}
                          onChange={handleChange}      
                </textarea>

                <label>Prioridade:</label>
                <select name="prioridade"
                        value={dadosFormulario.prioridade}
                        onChange={handleChange}
                >
                    <option>Baixa</option>
                    <option>Média</option>
                    <option>Alta</option>
                </select>

                <label>Time:</label>
                <select name="time"
                        value={dadosFormulario.time}
                        onChange={handleChange}

                >
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