import React, {Component} from 'react';
import ItemList from '../../itemList';
import ErrorMessage from '../../errorMessage';
import GotService from '../../../services';
import {withRouter} from 'react-router-dom';

class CharactersPage extends Component {

    state = {
        error: false
    }

    gotService = new GotService();

    componentDidCatch() {
        console.log('Error');
        this.setState({error: true});
    }

    render() {

        if(this.state.error) {
            return <ErrorMessage/>
        }

        return (
            <ItemList onItemSelected={(itemID) => {
                this.props.history.push(itemID);
            }}
            getData={this.gotService.getAllCharacters}
            renderItem = { ({name, gender}) => `${name} (${gender})`}/>
        )
    }
}

export default withRouter(CharactersPage);
