import './DropList.css'

const DropList = (props) => {
    return (
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select required={props.obrigatorio}>
                {props.itens.map(item => {
                        return <option key={item}>{item}</option>
                    })}
            </select>
        </div>
    )
}

export default DropList;