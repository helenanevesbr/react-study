import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

/*  Quando atualizamos uma lista, o React precisa determinar o que mudou.
Imagine uma transição de...
  <li>Alexa: 7 tasks left</li>
  <li>Ben: 5 tasks left</li>
para...
  <li>Ben: 9 tasks left</li>
  <li>Claudia: 8 tasks left</li>
  <li>Alexa: 5 tasks left</li>
Um humano lendo isso iria dizer que nós,além de mudarmos a contagem de tasks, trocamos a ordem de Alexa e Ben e inserimos Claudia entre eles. No entanto, React não tem como saber nossas intenções.
Portanto, precisamos especificar uma propriedade key (chave) para cada item da lista para diferenciá-los entre si.

Quando uma lista é re-renderizada, o React pega cada chave e busca nos itens da lista anterior por uma chave correspondente.
  - Se a lista atual tiver uma chave que ainda não existia, React cria um componente.
  - Se na lista atual tiver faltando uma chave que já existia na lista anterior, React destrói o componente anterior.
  - Se as duas chaves combinarem, o componente correspondente é movido.
Quando um elemento é criado, React extrai a propriedade key e armazena como uma chave diretamente no elemento retornado.
Entretanto, um componente não pode acessar sua key. Ou seja, key não pode ser referenciado utilizando this.props.keys.

Se nenhuma chave for especificada, React vai mostrar um aviso e utilizar, por padrão, o índice do array como chave.
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
      />
    );
  }

  render() {
    return (
      <div>
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
      history: [{
        squares: Array(9).fill(null),
      }],
      xIsNext: true
    };
  }

  handleClick(i) {
    const history = this.state.history;
    const current = history[history.length - 1];
    const squares = current.squares.slice();

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

    const moves = history.map((step, move) => {

      const desc = move ?
        'Go to move #' + move :
        'Go to game start';

      return (
        <li>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });

    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

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
          <ol>{moves}</ol>
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