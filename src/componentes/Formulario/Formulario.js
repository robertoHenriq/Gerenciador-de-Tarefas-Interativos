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
                label="Titulo"
                placeholder={'Digite o titulo da tarefa'}
                valor={titulo}
                aoAlterando={valor => setTitulo(valor)}
                />

            </form>
        </section>
    );
    }
    export default Formulario;