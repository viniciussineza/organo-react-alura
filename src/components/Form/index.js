import { useState } from "react";
import Button from "../Button";
import DropList from "../DropList";
import TextField from "../TextField";
import "./Form.css";

const Form = (props) => {

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

    const [name, setName] = useState('');
    const [role, setRole] = useState('');
    const [image, setImage] = useState('');
    const [team, setTeam] = useState('');

    const onSave = (evento) => {
        evento.preventDefault()
        props.onStafRegister({
            name,
            role,
            image,
            team  
        })
    };

    return (
        <section className="formulario">
            <form onSubmit={onSave}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <TextField 
                    obrigatorio={true} 
                    label="Nome" 
                    placeholder="Digite seu nome"
                    value={name}
                    onChanged={value => setName(value)}
                />
                <TextField 
                    obrigatorio={true} 
                    label="Cargo" 
                    placeholder="Digite seu cargo"
                    value={role}
                    onChanged={value => setRole(value)}
                />
                <TextField 
                    label="Imagem" 
                    placeholder="Informe o endereço da imagem"
                    value={image}
                    onChanged={value => setImage(value)}
                />
                <DropList 
                    obrigatorio={true} 
                    label="Time" 
                    itens={teams}
                    value={team}
                    onChanged={value => setTeam(value)}
                />
                <Button>Criar Card</Button>
            </form>
        </section>
    )
}

export default Form;