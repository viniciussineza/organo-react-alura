import Button from "../Button";
import DropList from "../DropList";
import TextField from "../TextField";
import "./Form.css";

const Form = () => {

    const teams = [
        '',
        'Programação',
        'Front-End',
        'Data Science',
        'DevOps',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão'
    ];

    const onSave = (evento) => {
        evento.preventDefault()
        console.log('Form foi submetido');
    };

    return (
        <section className="formulario">
            <form onSubmit={onSave}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <TextField obrigatorio={true} label="Nome" placeholder="Digite seu nome"/>
                <TextField obrigatorio={true} label="Cargo" placeholder="Digite seu cargo"/>
                <TextField label="Imagem" placeholder="Informe o endereço da imagem"/>
                <DropList obrigatorio={true} label="Time" itens={teams}/>
                <Button>Criar Card</Button>
            </form>
        </section>
    )
}

export default Form;