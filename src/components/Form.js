import React from 'react';
import TextInput from './TextInput'
import '../style/Forms';
import Button from './Button'

class Form extends React.Component {

computeBmi() {
    let bmiValue = (this.state.weight / this.state.height) /this.state.height;
    this.setState({bmi : bmiValue});
    let bmiClass = this.getBmi(bmiValue);
    this.setState({bmiClass : bmiClass});
}

getBmi(bmi) {
    if(bmi < 18.5) {
        return "UnderWeight";
    }
    if(bmi >= 18.5 && bmi < 24.9){
        return "Normal weight";
    }
    if(bmi >= 25 && bmi < 29.9) {
        return "OverWeight";
    }
    if(bmi >= 30) {
        return "Obesity";
    }
}



    render() {
        return (
            <>
            <div className='row'>
                <h3>BMI = {this.state.bmi}</h3>
            </div>
            <div className='row'>
                <h3>{this.state.bmiClass}</h3>
            </div>
            <div className='row'>
                <TextInput label="weight" placeholder="Enter height in cm" onChange={this.heightChange}/>
            </div>
            <div className='row'>
                <TextInput label="weight" placeholder="Enter Weight in KG"  onChange={this.weightChange}/>
            </div>
            <div>
                <Button label='SUBMIT' onClick={this.computeBmi} />
            </div>
        </>
        )
    }

}


export default Form;