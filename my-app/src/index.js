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

  const getBook = (id) => {
    const book = books.find(
      (book) => book.id === id
    );
    console.log(book);
  }

  return (
    <section className='booklist'>
      {books.map((book)=>{

        return <Book
          {...book}
          key={book.id}
          getBook={getBook}
        />;

      })}
    </section>
  );
}

const Book = ({img, title, author, id, getBook}) => {

  /*const getSingleBook = () =>{
    getBook(id);
  }
  // One way to *reference* in Book the function getBook from BookList instead of *invoking* it is to set up a wraper function like getSingleBook...
  */

  return (
    <article className='book'>
      <img src={img} alt={title} />
      <h2>{title}</h2>

      {/*<button onClick={getSingleBook}>Get book title</button>
      // ... and reference it here
      */}

      <button onClick={() => getBook(id)}>Get book title</button>
      {/* Another way is to wrap the getBook function in an anonymous arrow function, which is essentially the same as the other solution, except it is more elegant*/}

      <h4>{author} </h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList/>)