import React from "react";
import KombuchaList from "./KombuchaList";
import KombuchaDetails from "./KombuchaDetails";
import EditKombucha from "./EditKombucha";
import NewKombuchaForm from "./NewKombuchaForm";

class KombuchaControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterKombunchaList: [],
      selectedKombuncha: null,
      editing: false
    };
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;

    return (
      <React.Fragment>
      {currentlyVisibleState}
      <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}


