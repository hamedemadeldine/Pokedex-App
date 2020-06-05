import React, {Component} from 'react';
import './Pokecard.css';

const URL = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";

let padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3) : number);

class Pokecard extends Component {
    render() {
        let imgSrc = `${URL}${padToThree(this.props.id)}.png`;
        return (
        <div className='Pokecard'>
            <h1>{this.props.name}</h1>
            <div className="test">
                <img src={imgSrc} alt={this.props.name}/>
            </div>
            <div className="Pokecard-data">TYPE: {this.props.type}</div>
            <div className="Pokecard-data">EXP: {this.props.exp}</div>
        </div>
    );
    }
}

export default Pokecard;