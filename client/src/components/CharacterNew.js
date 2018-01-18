import React, { Component } from "react";
import { connect } from "react-redux";
import Modal from "./UI/Modal/Modal"
import Aux from "../hoc/Aux/Aux"
import CharacterInfo from "./CharacterInfo/CharacterInfo"

class CharacterNew extends Component {
  state = {
    characters: ["Dwarf", "Elf", "Halfling"],
    showModal: false
  };

  removeModal = () => {
    this.setState({showModal: false})
  }

  render() {
    return (
      <Aux>
        <Modal
          show={this.state.showModal}
          removeModal={this.removeModal}
        >
          <CharacterInfo />
        </Modal>

        <div>
          <h1>CHOOSE YOUR RACE:</h1>
          <h6>Click a character race for more information</h6>
          <ul>{this.state.characters.map(character =>
            <li onClick={() => {this.setState({showModal: true})}}>
              {character}
            </li>
          )}
          </ul>
        </div>
      </Aux>
    );
  }
}

export default CharacterNew;
