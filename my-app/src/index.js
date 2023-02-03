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

const Book = (props) => {

  const { img, title, author } = props;
  /* If we destructure the props object like this, we save time/typing...*/

  return (
    <article className='book'>
      
      <img src={img} alt={title} /> {/* ... because we don't need to reference object anymore. Eg "src={props.img}" */}

      <h2>{title}</h2>
      <h4>{author} </h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList/>)