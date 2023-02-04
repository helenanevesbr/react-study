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

/* every time you render a list of items in React, React wants to keep track of those items using a Key prop.
Basically it's the item's id, a value unique to the item that you can find inside the array and it's passed as a prop to the component which will render the item.*/

function BookList() {
  return (
    <section className='booklist'>

      {books.map((book)=>{
        console.log(book);
        const {img, title, author, id} = book;
        return <Book
          img={img}
          title={title}
          author={author}
          key={id} //Set the key prop on the main return, so it's passed down to the Book component
        />;
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