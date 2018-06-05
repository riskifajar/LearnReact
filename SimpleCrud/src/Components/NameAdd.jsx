import React, { Component } from 'react';

class nameAdd extends Component {
    constructor(props) {
        super(props);
        
        this.onSubmit = this.onSubmit.bind(this);
    }
    onSubmit(event) {
        event.preventDefault();

        this.props.onAdd(
            this.nameInput.value,
            this.ageInput.value
        );
        this.nameInput.value= '';
        this.ageInput.value= '';
    }
    render() {
        
        return (
            <form onSubmit={this.onSubmit}>
                <h3>TAMBAH NAMA</h3>
                <input placeholder="Nama" ref={
                    nameInput=> this.nameInput = nameInput
                }/>
                <input placeholder="Umur" ref={
                    ageInput=> this.ageInput = ageInput
                }/>
                <button>Tambah Nama</button>
            </form>
        );
    }
}

export default nameAdd;