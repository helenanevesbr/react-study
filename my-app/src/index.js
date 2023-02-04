import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

/* Even though we can nicely return HTML elements directly in our callback function, the book component already has the HTML structure that we need. To render it, the component is simply looking for the props: img, title and author.*/

const books = [
  {
    author: 'Jordan Moore',
    title: 'Interesting Facts For Curious Minds',
    img: './images/interestingfactsforthecuriousmind.jpg',
  },
  
  {
    author: "Bonnie Garmus",
    title: "Lessons in Chemistry: A Novel",
    img: './images/lessonsinchesmitry.jpg',
  }

]

function BookList() {
  return (
    <section className='booklist'>

      {books.map((book)=>{

        const {img, title, author} = book; /* Destructured book */

        return <Book

          img={img}
          title={title}
          author={author}
          /*So I'm rendering now the Book component and passing the properties of object book one by one as props.
          In a future refactoring, I'll pass the entire object, or I can spread out the properties. But for now, let's just go one by one. */

        />
      })}
    </section>
  );
}

const Book = ({ img, title, author}) => {
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