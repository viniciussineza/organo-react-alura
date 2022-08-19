import './TextField.css'

const TextField = (props) => {

    const onType = (evento) => {
        props.onChanged(evento.target.value)
    }

    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input value={props.value} onChange={onType} required={props.obrigatorio} placeholder={props.placeholder}/>
        </div>
    )
}

export default TextField;