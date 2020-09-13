import React from 'react';
import NewKombuchaForm from './NewKombuchaForm';
import KombuchaList from './KombuchaList';
import KombuchaDetails from './KombuchaDetails';
import EditKombucha from './EditKombucha';
import { render } from '@testing-library/react';


class KombuchaControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterKombuchaList: [],
      selectedKombucha: null,
      editing: false
    };
  }
}


handleClick = () => {
  if(this.state.selectedKombucha != null) {
    this.setState({
      formVisibleOnPage: false,
      selectedKombucha: null,
      editing: false
    });
  } else {
    this.setState(preState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage,
    }));
  }
}

handleAddNewKombuchaToList = (newKombucha) => {
  const newKombuchaList = this.state.kombuchaList.concat(newKombucha);
  this.setState({kombuchaList: newKombuchaList,
                formVisibleOnPage: false });
}

handleChangingSelectedKombucha = (id) => {
  const selectedKombuchaInList = this.state.kombuchaList.filter(kombucha = kombucha.id === id)[0];
  this.setState({selectedKombucha: selectedKombuchaInList});
}

handleDeletingKombucha = (id) => {
  const newKombuchaList = this.state.kombuchaList.filter(kombucha => kombucha.id === id)[0];
  this.setState({
    kombuchaList: newKombuchaList,
    selectedKombucha: null});
}

handleEditingKombucha = (id) => {
  const newKombuchaList = this.state.kombuchaList
    .filter(kombucha => kombucha.id !== this.state.selectedKombucha.id)
    .concat(kombuchaToEdit);
  this.setState({
    kombuchaList: editedKombuchaList,
    editing: false,
    selectedKombucha: null
  });
}

handleKombuchaClick = (id) => {
  const clickedKombucha = this.state.kombuchaList.filter(kombucha => kombucha.id === id)[0].quantity--;
  const editedKombuchaList = this.state.kombuchaList
    .filter(kombucha => kombucha.id !== id)
    .concat(clickedKombucha);
  this.setState({
    kombuchaList: editedKombuchaList,
    editing: false,
    selectedKombucha: null
  });
}

render(){
  let currentlyVisibleState = null;
  let buttonText = null;

  if(this.state.editing ) {
    currentlyVisibleState = <EditKombucha kombucha = {this.state.selectedKombucha} onEditKombucha = {this.handleEditingKombuchaInList}/>
    buttonText ="See All Kombucha";
  } else {
    currentlyVisibleState = <KombuchaList kombuchaList={this.state.kombuchaList} onKombuchaSelection={this.handleChangingSelectedKombucha} />;
    buttonText = "add kombucha";
  }
  return (
    <React.Fragment>
      {currentlyVisibleState}
      <button onClick={this.handleClick}>{buttonText}</button>
    </React.Fragment>
  );
}


export default KombuchaControl;