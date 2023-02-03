import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

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

      </section>
    );
}

const Book = ({ img, title, author }) => {   /* Another way to destructure the props object to save time/typing is to destructure it inside function parameters */

  // const { img, title, author } = props; --- this was the 2nd approach to destructure the object: we did it inside the component.

  return (
    <article className='book'>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author} </h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList/>)