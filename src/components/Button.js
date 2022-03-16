import React from 'react';

class Button extends React.component {
    render() {
        return (
            <div onClick= {this.props.onClick}>
                {this.props.label}
            </div>
        )
    }
}
export default Button;