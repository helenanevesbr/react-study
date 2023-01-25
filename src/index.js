import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

/*
Atualmente, cada componente Quadrado (Square) mantém o estado do jogo. Para verificar o vencedor, nós vamos manter o valor de cada um dos 9 quadrados em uma posição.

Para tanto, poderíamos perguntar para cada Quadrado pelo seu estado. Mas o código se torna difícil de ser compreendido e suscetível à erros.

A melhor opção é guardar o estado do jogo no componente pai (Tabuleiro) ao invés de cada Quadrado.

Para coletar dados de múltiplos filhos (children), ou para fazer dois filhos se comunicarem entre si, você precisa declarar um estado compartilhado em seu componente pai.
*/

class Square extends React.Component {
  render() {
    return (
      <button
        className="square"
        onClick={() => this.props.onClick()} 
        
        /*A propriedade onClick do DOM embutida no componente <button> diz ao React para criar um evento de escuta (event listener).
        Quando o botão é clicado, o manipulador de eventos onClick chamará a função recebida através da propriedade onClick que foi criada no Tabuleiro (this.props.onClick()).
        */
      >
        {this.props.value}

        {/*
        Agora passamos duas props do Tabuleiro para o Quadrado: value e onClick. A propriedade onClick é uma função que será chamada quando o Quadrado for clicado.
        */}
      </button>
    );
  }
}

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
    };
  }
  /*
  Estado inicial do Tabuleiro irá ter um array com 9 posições preenchidas por nulo (null). Esses 9 nulls corresponderão aos 9 quadrados.
  Quando preenchermos o tabuleiro mais tarde, ele ficará parecido com isto:
  [
    'O', null, 'X',
    'X', 'X', 'O',
    'O', null, null,
  ]
  */

  handleClick(i) {
    const squares = this.state.squares.slice();
    squares[i] = 'X';
    this.setState({squares: squares});
  }

  /*
  Como o Tabuleiro passou onClick={() => this.handleClick(i)} para o Quadrado, a função handleClick(i) será chamada quando o Quadrado for clicado.
  */


  renderSquare(i) {
    return (
      <Square value={this.state.squares[i]}

      /*
      Modificamos o Tabuleiro para instruir cada Quadrado individualmente.

      Para isso, modificamos o método renderSquare para definir o valor a partir do estado. Cada Square vai receber a proriedade value, que será 'X', 'O', ou null.

      O componente pai pode passar o estado de volta para os filhos através do uso de propriedades (props); isso mantém os componentes filhos em sincronia com os seus irmãos e também com o pai.

      Agora o state é guardado no componente Board ao invés de em cada Square. Quando o state do Board for alterado, os componentes Square serão re-renderizados automaticamente.
      
      Os componentes Square receberão os valores do Board e o informarão quando forem clicados. Os Squares são agora componentes controlados (controlled components).
      */

      onClick={() => this.handleClick(i)}

      /* Agora cada Quadrado atualiza o state do Tabuleiro. */

      /* O atributo onClick possue um significado especial para o React, pois ele é um componente nativo. */

      /* A convenção é usar nomes on[Event] para propriedades que representam eventos e handle[Event] para metodos que manipulam os eventos. */
      />
    );
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