import React from 'react'

class SearchInput extends React.Component {

    constructor(props){
        super(props)
        this.input = React.createRef()
    }

    componentDidMount(){
        this.input.current.focus()
    }

    inputChangeEvent(event){
        this.props.update(event.target.value)
    }

    render(){
        return (
            <input
                onChange={this.inputChangeEvent.bind(this)}
                value={this.props.searchText}
                placeholder="Wpisz pokemona"
                class="form-control col-sm-8 text-centered search-input"
                ref={this.input}
            />
        )
    }
}

export default SearchInput