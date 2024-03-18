import TextField from "../TextField"
import './style.css'

const Forms = () =>{
    return (
        <section className = "text-form">
            <form>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <TextField label= "Nome" placeholder = "digite seu nome..."/>
                <TextField label= "Cargo" placeholder = "digite seu cargo..."/>
                <TextField label= "Imagem" placeholder = "digite o endereço da imagem..."/>
            </form>
        </section>
    )
}

export default Forms