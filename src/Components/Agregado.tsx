import * as React from 'react';

import {ReTaller} from './ReTaller'

class Agregado extends React.Component<ITaskListProps, any> {
    render(): JSX.Element[] {
        return this.props.tasks.map((rtaller: ReTaller, i: number) => {
            return (
                <div className="col-md-4 mt-2" key={rtaller.id}>
                    <div className="card card-body text-center">
                        <h3>{rtaller.descripcion}</h3>
                        <p>{rtaller.monto}</p>
                    </div>
                </div>
            )
        });
    }
}

interface ITaskListProps {
    tasks: ReTaller[];
    deleteATask: (id: number) => any;
}

export default Agregado;