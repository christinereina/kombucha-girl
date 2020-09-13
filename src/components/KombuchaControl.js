import React from 'react';
import NewKombuchaForm from './NewKombuchaForm';
import KombuchaList from './KombuchaList';
import KombuchaDetails from './KombuchaDetails';
import EditKombucha from './EditKombucha';


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
  this.setState({selectedKombucha: selectedKombuchaInList});
}

handleDeletingKombucha = (id) => {
  const newKombuchaList = this.state.kombuchaList
    .filter(kombucha => kombucha.id !== this.state.selectedKombucha.id)
    .concat(kombuchaToEdit);
  this.setState({
    kombuchaList: editedKombuchaList,
    editing: false,
    selectedKombucha: null
  });
}

export default KombuchaControl;
