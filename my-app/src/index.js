import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

const BookList = () => {
    return (
        <section className='booklist'>
            <Book />
            <Book />
            <Book />
            <Book />
        </section>
    );
};

const Book = () => {

    const title = "Lessons in Chemistry: A Novel"
    const author = "Bonnie Garmus"

    return (
      <article className='book'>
        <img
          src='./images/lessonsinchesmitry.jpg'
          alt='Lessons in Chemistry: A Novel'
        />
        <h2>{title}</h2>
        <h4>{author.toUpperCase()}</h4>

        {/* value inside must be an expression (return value), can't be a statement.
        For instance, if we try to declare a variable inside like this <p>{let x = 6}</p>, it will throw an error
        But <p>{6+6}, because 6+6 returns a value
        Im a nutsheel, it behaves simmilarly to console.log</p>,
        */}

      </article>
    );
};

/* refactor to single book component (personal preference) */

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList/>)