import React, { Fragment } from 'react';
import RestAPI from './RestAPI';
import SearchInput from './SearchInput'

class Pokedex extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            searchText: ""
        }
    }

    handler(value){
        this.setState({searchText: value})
    }

    render(){
        return (
            <Fragment>
                <SearchInput update={this.handler.bind(this)}/>
                <RestAPI searchText={this.state.searchText}/>
            </Fragment>
        )
    }
}

export default Pokedex