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
          {...book}
          key={book.id}
        />;
      })}
    </section>
  );
}

const Book = ({img, title, author}) => {

  const displayTitle = () => {
    console.log(title);
  };
  /*In JS, to have a button "display title" for each book in a book list would require more code.
  Because each button can only reference the info of one item in a array. You'd have to add lots of forEach() methods in order to itinerate.
  In React, however, we can just set the function and button in the Book component, because it already has the props of one Book independent from the other books. */

  return (
    <article className='book'>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <button onClick={displayTitle}>display title</button>
      <h4>{author} </h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList/>)