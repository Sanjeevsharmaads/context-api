import React from "react";
import LanguageContext from "./contexts/LanguageContext";
import ColorContext from "./contexts/ColorContext"

class Button extends React.Component {
    //static is as its property to its class itself you also write like Button.contextType
    //only needed when not using consumer
    //static contextType = LanguageContext;

    renderSubmit = value => {
        return value === 'english' ? 'submit' : 'hindi submit';
    }

    renderButton = color => {
        return <button className={`ui button ${color}`}>
            <LanguageContext.Consumer>
                {({language}) => this.renderSubmit(language)}
            </LanguageContext.Consumer>
        </button>
    }
    render() {
        return (
            <div>
                <ColorContext.Consumer>
                    {(color) =>
                        this.renderButton(color)
                    }
                </ColorContext.Consumer>
            </div>
        )
    }
}

export default Button;