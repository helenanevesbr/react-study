import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

/*
Um componente recebe parâmetros, chamados props (abreviação de propriedades), e retorna uma hierarquia de elementos para exibir através do método render.
*/

class Square extends React.Component {
  render() {
    return (

      /*
      O método render retorna uma descrição do que você deseja ver na tela. React recebe a descrição e exibe o resultado.
      */

      <button className="square">
        {/* TODO */}
      </button>
    );
  }
}

class Board extends React.Component {
  renderSquare(i) {
    return <Square />;
  }

  render() {
    const status = 'Next player: X';

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

    /*
    Você pode colocar quaisquer expressões JavaScript dentro de chaves no JSX. Cada elemento React é um objeto JavaScript que você pode armazenar em uma variável ou passar em seu código.

    Temos três componentes React:
    Quadrado(Square)
    Tabuleiro(Board)
    Jogo(Game)

    O componente Board acima apenas renderiza componentes internos do DOM como <div />. Mas você também pode compor e renderizar componentes React personalizados. Por exemplo, agora podemos nos referir a todas as rows do board (cada uma com 3 squares) escrevendo <Board />

    O componente Square renderiza um único <button> e o Board renderiza 9 squares.
    */

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

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);