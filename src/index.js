import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

/* Vamos armazenar os arrays squares anteriores em um outro array chamado history. O array history representa todos os estados do tabuleiro, da primeira à última jogada,

Colocar o state history no componente Game, nos permite remover o state squares de seu componente filho, Board.

Isso permite que Game instrua o Board a renderizar turnos anteriores a partir do history.
*/

function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

class Board extends React.Component {

  renderSquare(i) {
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}

        /*O componente Board receba as props squares e onClick do componente Game
        Passamos a localização de cada Square para o manipulador onClick para indicar qual Square foi clicado */
      />
    );
  }

  render() {
    return (
      <div>

        {/*Uma vez que o componente Game agora está renderizando o status do jogo, nós podemos remover o código correspondente do método render do componente Board. */}

        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
    };
  }
  /* configuramos o state inicial do componente Board para o componente Game em seu construtor*/

  handleClick(i) {
    const history = this.state.history;
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    /*No componente Game, dentro do método handleClick, nós concatenamos novas entradas do histórico de jogadas em history. */

    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    squares[i] = this.state.xIsNext ? 'X' : 'O';

    this.setState({
      history: history.concat([{
        squares: squares,
      }]),
      xIsNext: !this.state.xIsNext,
    });
  }

  render() {

    const history = this.state.history;
    const current = history[history.length - 1];
    const winner = calculateWinner(current.squares);
    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    /* A função render do componente Game utiliza a entrada mais recente do histórico (history) para determinar e exibir o status do jogo. */

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}


function calculateWinner(squares) {

  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    
    if (
      squares[a] && squares[a] ===
      
      squares[b] && squares[a] === squares[c]) {
        return squares[a];
    }
  }
  return null;
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);