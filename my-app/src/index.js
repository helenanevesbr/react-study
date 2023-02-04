import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

const books = [
  {
    author: 'Jordan Moore',
    title: 'Interesting Facts For Curious Minds',
    img: './images/interestingfactsforthecuriousmind.jpg',
    id: 1,
  },
  
  {
    author: "Bonnie Garmus",
    title: "Lessons in Chemistry: A Novel",
    img: './images/lessonsinchesmitry.jpg',
    id: 2,
  }

]

function BookList() {
  return (
    <section className='booklist'>

      {books.map((book)=>{
        return <Book

          book={book}
          /*props book, therefore, is a object which contains another object.
          book:{book:{author: title: [...] }}.
          So, in order to pull the properties (img, title) out...*/

          key={book.id}
        />;
      })}

    </section>
  );
}

const Book = ({ book: {img, title, author}}) => { //... object book needs to be be destructured. This is the way to do it if you are deconstructing props in the function parameters.

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