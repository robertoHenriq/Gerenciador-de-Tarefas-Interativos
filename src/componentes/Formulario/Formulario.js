import CampoTexto from "../CampoTexto/CampoTexto";
import { useState } from "react";

const Formulario = ({ aoTarefaCadastrada }) => {

    const [titulo, setTitulo] = useState('')
    const [prioridade, setPrioridade] = useState('')
    const [descricao, setDescricao] = useState('')
    const [time, setTime] = useState('')
    const [responsavel, setResponsavel] = useState('')
    const [limite, setLimite] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        aoTarefaCadastrada({
            titulo,
            prioridade,
            descricao,
            time,
            responsavel,
            limite
        })
        setTitulo('')
        setPrioridade('')
        setDescricao('')
        setTime('')
        setResponsavel('')
        setLimite('')
    }


    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
  <CampoTexto
    obrigatorio={true}
    label="Título"
    placeholder="Digite o título da tarefa"
    valor={titulo}
    aoAlterando={valor => setTitulo(valor)}
  />

  <CampoTexto
    obrigatorio={true}
    label="Prioridade"
    placeholder="Digite a prioridade"
    valor={prioridade}
    aoAlterando={valor => setPrioridade(valor)}
  />

  <CampoTexto
    label="Descrição"
    valor={descricao}
    aoAlterando={setDescricao}
  />

  <CampoTexto
    label="Time"
    valor={time}
    aoAlterando={setTime}
  />

  <CampoTexto
    label="Responsável"
    valor={responsavel}
    aoAlterando={setResponsavel}
  />

  <CampoTexto
    label="Prazo"
    valor={limite}
    aoAlterando={setLimite}
  />

  <button>Salvar Tarefa</button>
</form>

        </section>
    );
    }
    export default Formulario;