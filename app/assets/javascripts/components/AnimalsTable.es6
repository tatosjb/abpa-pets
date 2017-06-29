class AnimalsTable extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            data: new Animals()
        };
    }

    get rows(){
        console.log(this.state.data.animals);
        return this.state.data.animals.map((animal) => {
            return <AnimalsRow animal={animal} key={animal.id}/>;
        });
    }

    render() return (
            <table>
                <thead>
                <tr>
                    <th>Código</th>
                    <th>Nome</th>
                </tr>
                </thead>
                <tbody>{this.rows}</tbody>
            </table>
        );
    }
}

class AnimalsRow extends React.Component {
    render() {
        console.log(this.props.animals)
        return (
            <tr>
                <td>{this.props.animal.id}</td>
                <td>{this.props.animal.name}</td>
            </tr>
        )
    }
}