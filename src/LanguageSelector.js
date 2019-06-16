import React from "react";

class LanguageSelector extends React.Component{
    render(){
        return(
            <div>
                Select a language
                <i className="flag us" onClick={()=>{this.props.onLanguageChange('english')}}></i>
                <i className="flag in" onClick={()=>{this.props.onLanguageChange('hindi')}}></i>
            </div>
        )
    }
}

export default LanguageSelector;