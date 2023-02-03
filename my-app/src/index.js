import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

/* each Book in the Booklist will be an object.
We will refactor const title, author, etc to properties this object. */

const firstBook = {
  author: 'Jordan Moore',
  title: 'Interesting Facts For Curious Minds',
  img: './images/interestingfactsforthecuriousmind.jpg',
};

const secondBook = {
  title: "Lessons in Chemistry: A Novel",
  author: "Bonnie Garmus",
  img: './images/lessonsinchesmitry.jpg',
}

function BookList() {
    return (
      <section className='booklist'>

        <Book
          author={firstBook.author}
          title={firstBook.title}
          img={firstBook.img} />
        <Book
          author={secondBook.author}
          title={secondBook.title}
          img={secondBook.img} />

        {/* Atribuimos valores das propriedades dos objetos firstBook e secondBook e como props do componente Book*/}

      </section>
    );
}

const Book = (props) => {
    return (
      <article className='book'>
        <img src={props.img} alt={props.title} />
        <h2>{props.title}</h2>
        <h4>{props.author} </h4>
      </article>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList/>)