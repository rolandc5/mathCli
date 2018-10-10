import React, { Component } from 'react';
import './Global.css';

export default class Menu extends Component {
    render = () => {
        return (
            <div className='m-container'>
                <div className='m-wrapper'>
                    <div className='m-menuContainer'>
                        <div className='m-titleContainer'>
                            <h2 className='m-title'>MathUp</h2>
                        </div>
                        <div className='m-listContainer'>
                            <ul className='m-ul-listDecoration'>
                                <li className='m-li-listDecoration'><button className='m-buttonStyle' onClick={ () => this.props.page(1) }>Single Player</button></li>
                                <li className='m-li-listDecoration'><button className='m-buttonStyle' onClick={ () => this.props.page(2) }>Multiplayer</button></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}