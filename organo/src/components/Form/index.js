import TextField from "../TextField"
import DropDown from "../DropDown"
import './style.css'

const Forms = () =>{

    const teans = [
        'Programação',
        'Front-end',
        'Data Science',
        'Devops',
        'Ux e Design',
        'Mobile',
        'Inovação e Gestão'
    ]

    return (
        <section className = "text-form">
            <form>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <TextField label= "Nome" placeholder = "digite seu nome..."/>
                <TextField label= "Cargo" placeholder = "digite seu cargo..."/>
                <TextField label= "Imagem" placeholder = "digite o endereço da imagem..."/>
                <DropDown itens ={teans} label = 'times'/>
            </form>
        </section>
    )
}

export default Forms