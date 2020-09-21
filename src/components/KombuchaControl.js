import React from 'react';
import NewKombuchaForm from './NewKombuchaForm';
import KombuchaList from './KombuchaList';
import KombuchaDetails from './KombuchaDetails';
import EditKombuchaForm from './EditKombuchaForm';
import Button from 'react-bootstrap/Button';


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

  handleClick = () => {
    if(this.state.selectedKombucha != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedKombucha: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }

  handleEditClick = () => {
    this.setState({editing: true});
  }

  handleChangingSelectedKombucha = (id) => {
    const selectedKombucha = this.state.masterKombuchaList.filter(kombucha => kombucha.id === id)[0];
    this.setState({selectedKombucha: selectedKombucha});
  }

  handleEditingKombucha = (kombuchaToEdit) => {
    const editedmasterKombuchaList = this.state.masterKombuchaList
      .filter(kombucha => kombucha.id !== this.state.selectedKombucha.id)
      .concat(kombuchaToEdit);
    this.setState({
      masterKombuchaList: editedmasterKombuchaList,
      editing: false,
      selectedKombucha: null
    });
  }

  handleAddNewKombuchaToList = (newKombucha) => {
    const newMasterKombuchaList = this.state.masterKombuchaList.concat(newKombucha);
    this.setState({
      masterKombuchaList: newMasterKombuchaList,
      formVisibleOnPage: false });
  }

  handleDeletingKombucha = (id) => {
    const newMasterKombuchaList = this.state.masterKombuchaList.filter(kombucha => kombucha.id !== id);
    this.setState({
      masterKombuchaList: newMasterKombuchaList,
      selectedKombucha: null
    });
  }

  handleKombuchaPurchaseClick = (id) => {
    const purchaseKombucha = this.state.masterKombuchaList.filter(kombucha => kombucha.id === id)[0];
    if (purchaseKombucha.quantity != 0) {
      purchaseKombucha.quantity--;
    }
    const editedKombuchaList = this.state.masterKombuchaList
      .filter(kombucha => kombucha.id !== id)
      .concat(purchaseKombucha);
    this.setState({
      masterKombuchaList: editedKombuchaList,
      editing: false,
      selectedKombucha: null
    });
  }

  render() {     
    let currentlyVisibleState = null;
    let buttonText = null;

    if(this.state.editing ) {
      currentlyVisibleState = <EditKombuchaForm kombucha = {this.state.selectedKombucha} onEditKombucha = {this.handleEditingKombucha}/>
      buttonText ="See All Kombucha";
    } else if (this.state.selectedKombucha != null) {
      currentlyVisibleState = <KombuchaDetails kombucha = {this.state.selectedKombucha} onClickingDelete = {this.handleDeletingKombucha} onClickingEdit = {this.handleEditClick} onClickingPurchase = {this.handleKombuchaPurchaseClick}/>
      buttonText ="See All Kombucha";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewKombuchaForm onNewKombuchaCreation={this.handleAddNewKombuchaToList} />;
      buttonText = "go back";
    } else {
      currentlyVisibleState = <KombuchaList kombuchaList={this.state.masterKombuchaList} onKombuchaSelection={this.handleChangingSelectedKombucha} />;
      buttonText = "add kombucha";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <Button variant='info' onClick={this.handleClick}>{buttonText}</Button>
      </React.Fragment>
    );
  }
}

export default KombuchaControl;