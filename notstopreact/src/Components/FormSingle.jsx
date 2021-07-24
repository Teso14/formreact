import React, {Component} from 'react';
import P from './P';

const validate = values =>{
    const errors = {}
    if(!values.nombre){
        errors.nombre = 'Required Field'
    }
    if(!values.lastName){
        errors.lastName = 'Required field'
    }
    console.log(values);
    return errors
}

export default class FormSingle extends Component{
    state={
        errors:{}
    }
    handleChange = ({target}) =>{
        const {name,value}= target
        this.setState({[name]:value})
    }

    handleSubmit = e =>{
        e.preventDefault()
        const {errors,...sinErrors} = this.state
        const result = validate(sinErrors)
        if(Object.keys(result).length){
            e.target.reset()
            return this.setState({errors : result})
        }
        console.log('Tso prevent🤨',this.state);
    }
    render(){
        console.log(this.state);
        const {errors} = this.state
        return(
            <form onSubmit={this.handleSubmit} className="bg-dark ">
                <h1 className="bg-info text-center text-white ">FORM FOR TO NEVER GIVE UP🤠❗</h1>
                <input className="mx-2 " name="nombre" onChange={this.handleChange} />
                {errors.nombre && <P>{errors.nombre}</P>}
                <input  className="mx-2" name="lastName" onChange={this.handleChange} />
                {errors.lastName && <P>{errors.lastName}</P>}
                <input className="btn btn-warning mx-3 mb-2" type="submit" value="Send"/>
            </form>
        )
    }
}