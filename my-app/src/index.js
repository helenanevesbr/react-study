import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

const title = "Lessons in Chemistry: A Novel"
const author = "Bonnie Garmus"
const img = './images/lessonsinchesmitry.jpg'

function BookList() {
    return (
      <section className='booklist'>
        <Book author={author} title={title} img={img} />
        <Book title={title} img={img} />
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