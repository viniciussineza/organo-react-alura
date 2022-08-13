import './Button.css';

const Button = (props) => {
    return (
        <button className='butao'>{props.children}</button>
    )
}

export default Button;