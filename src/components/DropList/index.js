import './DropList.css'

const DropList = (props) => {


    return (
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select onChange={evento => props.onChanged(evento.target.value)} required={props.obrigatorio} value={props.value}>
                {props.itens.map(item => {
                        return <option key={item}>{item}</option>
                    })}
            </select>
        </div>
    )
}

export default DropList;