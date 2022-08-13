import './TextField.css'

const TextField = (props) => {
    return (
        <div className="campo-texto">
            <label for="name">{props.label}</label>
            <input required={props.obrigatorio} type="text" id="{props.label}" placeholder={props.placeholder}/>
        </div>
    )
}

export default TextField;