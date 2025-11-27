const CampoTexto = ({ aoAlterando, valor, placeholder,obrigatorio }) => {

    const placeholderModificada = `${placeholder}...` 

    const aoDigitado = (evento) => {
        aoAlterando(evento.target.value)
    }

    return (
        <div className="campo-texto">
     
            <input required={obrigatorio} placeholder={placeholderModificada} onChange={aoDigitado} value={valor}/>
            
        </div>
    );
    }
    export default CampoTexto;