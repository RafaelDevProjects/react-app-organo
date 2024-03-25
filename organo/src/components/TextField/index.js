
import './style.css'

const TextField = (props) => {

    const aoDigitado = (event) =>{
        props.aoAlterado(event.target.value)        
    }
   

    return (
        <div className ='text-field'>
            <label>{props.label}</label>
            <input valor = {props.value} onChange = {aoDigitado} placeholder={props.placeholder} required = {props.obrigatorio}/>
        </div>
    )
}

export default TextField