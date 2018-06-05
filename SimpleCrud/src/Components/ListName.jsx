import React, { Component } from 'react';

class ListName extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEdit : false
        }

        //event handler
        this.hapus = this.hapus.bind(this);
        this.Edit = this.Edit.bind(this);
        this.editSubmit = this.editSubmit.bind(this);

    }
    
    hapus() {
        const {hapus, name} = this.props;

        hapus(name);
    }

    Edit() {
        this.setState({isEdit: true})
    }

    editSubmit(event) {
        event.preventDefault();

        this.props.editSubmit(
            this.nameInput.value,
            this.ageInput.value,
            this.props.name
        );
        this.setState({isEdit: false});
    }
    render() {
        const {name, age} = this.props;
        return (
            <div className="App">
                {
                    this.state.isEdit
                    ?
                    (
                        <form onSubmit={this.editSubmit} className="App">
                            <input type="text" ref={
                                nameInput => this.nameInput = nameInput
                            } 
                            defaultValue= {name}
                            />
                            <input type="text" ref={
                                ageInput => this.ageInput = ageInput
                            }
                            defaultValue={age}
                            />
                            <button>SAVE</button>
                        </form>
                    )
                    : (
                        <div></div>
                    )
                }
                <ul className="App">
                    <li>{name}</li>
                    <li>{age}</li>
                    <button onClick={this.hapus}>X</button>
                    <button onClick={this.Edit}>Edit</button>
                </ul>
            </div>
        );
    }
}

export default ListName;