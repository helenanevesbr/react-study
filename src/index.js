import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
    };
  }

  handleClick(i) {
    const squares = this.state.squares.slice();

    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    /* modificamos a função handleClick do Board para ignorar o click, caso alguém tenha vencido o jogo ou se o quadrado (square) já esteja ocupado */

    squares[i] = this.state.xIsNext ? 'X' : 'O';

    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,
    });
  }

  renderSquare(i) {
    return (
      <Square
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  }

  render() {

    const winner = calculateWinner(this.state.squares);
    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }
    /* Chamamos calculateWinner (função global) para checar se um jogador venceu. Caso tenha vencido, podemos mostrar um texto como “Winner: X” ou “Winner: O” */

    return (
      <div>
        <div className="status">{status}</div>
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
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// A função abaixo irá verificar se há um vencedor e retornará 'X', 'O' ou null conforme apropriado.

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
  /*Aqui temos todas as combinações que caracterizam uma vitória no jogo.
  No jogo da velha, temos 3 linhas, cada linha com 3 quadrados:
    0  1  2
    3  4  5
    6  7  8
  Uma forma de ganhar é se o valor (ou X ou O) contido no quadrado 0 for igual ao valor contido nos quadrados adjancentes, 1 e 2. Ou seja [0,1,2].
  Outras combinações vencedoras são [0,3,6] e [0,4,8] que são, respectivamente, os quadrados da primeira coluna e os quadrados de uma das diagonais.
  */

  for (let i = 0; i < lines.length; i++) { //para cada combinação vencedora...
    const [a, b, c] = lines[i]; //... temos constantes que guardam as posições dessa combinação
    
    if (
      squares[a] && squares[a] === //para evitar que code quebre  caso square[a] esteja undefined
      
      squares[b] && squares[a] === squares[c]) { //O conteúdo (ou X ou O) do quadrado em uma posição vencedora é igual ao contéudo dos quadrados nas outras 2 posições da combinação que resulta em vitória? Se sim...
        return squares[a]; //retorne qual é esse conteúdo: ou X ou O.
    }
  }
  return null;
}

/* Ordem de squares:

  1° - Construído como uma array de 9 elementos nulos - Constructor do componente Board

  2° - Antes mesmo de qualquer click, uma função para renderizar os quadrados é chamada: função render chama a função renderSquare - Componente Board
  A função render organiza os 9 quadrados visualmente em 3 <div>, 1 <div> para cada linha.
  Ela chama a renderSquare 9 vezes. Ao chamar, atribui i ao argumento da função, sendo i a posição do quadrado no tabulheiro. Ex: 1° quadrado -> renderSquare(0). Último quadrado -> renderSquare(8)

  3° - O método renderSquare do Board passa um prop chamado value para o componente-função Square.
  A props value do Square recebe o estado atual do quadrado
    value={this.state.squares[i]}
  squares no caso vai se referir a array ou do Constructor (caso nenhum clique tenha ocorrido ainda) ou a array gerada em handleClick.
  O Square recebe esse parâmetro (aka prop) e retorna uma hierarquia de elementos para exibir através do método render.
*/

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);