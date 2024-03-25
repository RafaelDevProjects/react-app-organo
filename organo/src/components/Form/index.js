import TextField from "../TextField"
import DropDown from "../DropDown"
import './style.css'
import Button from "../Button"
import { useState } from "react"

const Forms = () =>{

    const teams = [
        'Programação',
        'Front-end',
        'Data Science',
        'Devops',
        'Ux e Design',
        'Mobile',
        'Inovação e Gestão'
    ]

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')


    const aoSalvar = (event) =>{
        event.preventDefault()
        console.log('Form submetido =>',nome,cargo,imagem,time)
    }

    return (
        <section className = "text-form">
            <form onSubmit = {aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <TextField 
                    obrigatorio = {true} 
                    label= "Nome" 
                    placeholder = "digite seu nome..."
                    valor = {nome}
                    aoAlterado = {value => setNome(value)}
                />
                <TextField 
                    obrigatorio = {true}  
                    label= "Cargo" 
                    placeholder = "digite seu cargo..."
                    valor = {cargo}
                    aoAlterado = {value => setCargo(value)}
                />
                <TextField 
                    label= "Imagem" 
                    placeholder = "digite o endereço da imagem..."
                    valor = {imagem}
                    aoAlterado = {value => setImagem(value)}
                />
                <DropDown 
                    obrigatorio = {true} 
                    itens ={teams} 
                    label = 'times'
                    valor = {time}
                    aoAlterado = {value => setTime(value)}

                />
                <Button>
                    Criar card
                </Button>
            </form>
        </section>
    )
}

export default Forms