import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

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

      {/* {books}
      </section>

      React can't render objects like books directly - this would thrown an error.
      */}

        {books.map((book)=>{
          return <div><h2>{book.title}</h2></div>
        })}
        {/*
        The map function creates a new array from calling a function for every array element. Therefore, it creates a callback function for every item in the array.
        It will iterate over each object of the array books. That's how we will pull out the properties of these objects.
        Not only can React render an object (indirectly) like this, but it can also wrap the properties of these objects on a HTML structure - div, h1, etc).
        */}

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