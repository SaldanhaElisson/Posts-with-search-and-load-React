import { Component } from "react/cjs/react.production.min";
import './style.css'

export class Button extends Component{

    render() {
        const { text, onClick, disabled } = this.props
        return(
            
            <button onClick={onClick} className = 'button' disabled = {disabled}>
                {text}
            </button>
        )
    }
}