import React, { Component } from 'react'
import Square from '../Square/Square'
import Knight from '../Knight/Knight'
import {canMoveKnight, moveKnight} from '../../services/Game'

class Board extends Component {
    handleSquareClick = (x, y) =>{
        if(canMoveKnight(x, y)){
            moveKnight(x,y)
        }
    }
    renderSquare = (i, [knightX, knightY]) => {
        const x = i % 8;
        const y = Math.floor(i / 8)
        const isKnightHere = x === knightX && y === knightY;
        const black = (x + y) % 2 === 1
        const piece = isKnightHere ? <Knight/> : null;
        return <div onClick={() => this.handleSquareClick(x, y)} key={i} style={{ width: '12.5%', height: '12.5%' }}>
                <Square black={black}>{piece}</Square>
            </div>;
    };
    render () {
        const sqaures = [];
        for ( let i = 0; i < 64; i++){
            sqaures.push(this.renderSquare(i, this.props.knightPosition))
        }
        return (
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexWrap: 'wrap'
                }}>
                {sqaures}
            </div>
        )
    }
}

export default Board;