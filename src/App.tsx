import * as React from 'react';
import RegistroTaller from './Components/RegistroTaller';
import Personal from './Components/Personal';
import { ReTaller } from './Components/ReTaller';
import Agregado from './Components/Agregado';

export class App extends React.Component<IProps, IState> {
  
  constructor(props: IProps){
    super(props);
    this.state = {
      retaller:[]
    };
  }

  addReTaller(rtaller:ReTaller):void{
    this.setState({
      retaller:[...this.state.retaller, rtaller]
    })
  }
  render(): JSX.Element{
    console.log(this.state)
    return (
      <div className="App">
        <Personal />
        <RegistroTaller addReTaller={this.addReTaller} />
        <Agregado rtaller={this.state.retaller}/>
      </div>
    )
  }
}

interface IProps{
  title?: string;
}

interface IState{
  retaller: ReTaller[];
}

