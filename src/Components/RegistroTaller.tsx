import React from 'react'
import Card from "@material-ui/core/Card";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from '@material-ui/core/ListItemText';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import {ReTaller} from './ReTaller'

class RegistroTaller extends React.Component<RegistroReTaller,any>{

    constructor(props: RegistroReTaller){
        super(props);
        this.state = {
            descripcion:'',
            monto:'',
        };
    }

    getCurrentTimestamp(): number {
        const date: Date = new Date();
        console.log(date.getTime())
        return date.getTime();
    }

    handleNewTaller (e: React.FormEvent<HTMLFormElement>):any {
        e.preventDefault()
        const NuevoTaller: ReTaller = {
            id: this.getCurrentTimestamp(),
            descripcion: this.state.descripcion,
            monto: this.state.monto
        };
        this.setState({ descripcion: '', monto: '' });
        this.props.addReTaller(NuevoTaller);
    }

    handleInputChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const { value, name } = e.target;
        this.setState({
            [name]: value
        });
    }

render(){
    return( 
        <Card>
        <form onSubmit = { e => this.handleNewTaller(e)} >
                <ListItem button >
                    <TextField onChange={e => this.handleInputChange(e)} id="standard-textarea" label="Registro de servicio" placeholder="Placeholder" 
                    name="descripcion" multiline value={this.state.descripcion}/>
                    <TextField onChange={e => this.handleInputChange(e)} id="standard-textarea" label="Registro de servicio" placeholder="Placeholder" 
                    name="monto" multiline value={this.state.monto}/>
                    <ListItemText />
                    <Button type="submit" variant="contained" color="primary" size="large"  startIcon={<SaveIcon />}>
                    Save
                    </Button>
                </ListItem>
                
        </form>
        </Card>)
}
}

interface RegistroReTaller {
    addReTaller: (retaller:ReTaller)=> void;
}

export default RegistroTaller;