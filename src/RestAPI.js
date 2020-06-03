import React from 'react';

class RestAPI extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            cards: []
        }
    }

    componentDidMount() {
        this.dane()
    }

    componentDidUpdate(prevProps, prevState){
        // console.log(prevProps, this.props.searchText)
        if(prevProps.searchText !== this.props.searchText){
            this.dane()
        }
    }

    dane() {
        fetch(
            'https://api.pokemontcg.io/v1/cards?name=' + this.props.searchText,
            { method: 'GET' }
        )
        .then(e => e.json())
        .then(cards => {
            this.setState({ cards : cards.cards })
        })
        .catch( (error) => console.log(error))
    }

    render() {
        let listOfCards = null;
        if(this.state.cards.length > 0) {
            listOfCards = [];
            const cards = this.state.cards
            for(let card in cards){
                listOfCards.push(
                <div className="col-sm-3" key={cards[card]['id']}>
                    <img src={cards[card]['imageUrl']} alt={cards[card]['name']} />
                </div> )
            }
        } else {
            listOfCards = <p className="empty">Empty list...</p>            
        }

        return (
            <div className="container-fluid">
                <div className="row">
                {listOfCards}
                </div>
            </div>
        );
    }
}

export default RestAPI