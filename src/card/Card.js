/**
 * Created by greg on 26/08/17.
 */
import React, {Component} from 'react';
import './card.css';

class Card extends Component {
    render() {
        return (
            <div className="card">

                <div className="card-content">

                    <h6 className="right-align grey-text">Domingo, 27 de Agosto</h6>

                    <span className="card-title">Título do Cartão</span>

                    <p>Eu sou um cartão muito simples. Eu sou bom para conter pequenas informações. Eu sou conveniente
                        por que eu preciso de muito pouca marcação para ser usado efetivamente.</p>

                </div>

                <div className="card-action">

                    <div className="row action-content valign-wrapper">

                        <div className="col s12 m8 l8">
                            <ul className="score">
                                <li className="score-item"><i className="material-icons">star_border</i></li>
                                <li className="score-item"><i className="material-icons">star_border</i></li>
                                <li className="score-item"><i className="material-icons">star_border</i></li>
                                <li className="score-item"><i className="material-icons">star_border</i></li>
                                <li className="score-item"><i className="material-icons">star_border</i></li>
                            </ul>
                        </div>

                        <div className="col s12 m4 l4 right-align">
                            <a href="#" className="m-n"><i className="material-icons v-a-m">comment</i> 10 Comments</a>
                        </div>

                    </div>

                </div>

            </div>
        );
    }
}

export default Card;