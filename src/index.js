import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

class Square extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      value: null,
    };
  }

  /* Queremos que o componente Square “lembre” que foi clicado e preencha com um “X”. Para “lembrar” as coisas, os componentes usam o estado (state)
  Vamos armazenar o valor atual do Square em this.state e alterá-lo quando o Square for clicado.
  Adicionamos um construtor à classe para inicializar o estado.
  */

  render() {
    return (

      <button
        className="square"
        onClick={() => this.setState({value:'X'})}
      >
        {this.state.value}
      {/* Mudamos o método render do componente Square para exibir o valor do estado (state) atual quando clicado

      Ao chamar this.setState a partir de um manipulador onClick no método render do componente Square, nós dizemos ao React para renderizar novamente aquele Square sempre que seu <button> for clicado. Após a atualização, o this.state.value do Square será 'X',

      Quando você chama setState em um componente, o React atualiza automaticamente os componentes filhos

      Árvore de componentes React:
      Game -> Board -> Square, Square, Square
      */}
      </button>
    );
  }
}

class Board extends React.Component {
  renderSquare(i) {
    return <Square value={i} />; //passando um “prop” de um componente pai Board...
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