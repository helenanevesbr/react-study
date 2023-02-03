import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

const title = "Lessons in Chemistry: A Novel"
const author = "Bonnie Garmus"
const img = './images/lessonsinchesmitry.jpg'

const BookList = () => {
    return (
        <section className='booklist'>

            <Book job='developer' />
            <Book title='random title' number={22} />

            {/*props works simmilar to arguments, parameters and function.
            In that analogy, the root component, BookList is the function calling passing arguments, and Book component is the function recieving those arguments.*/}

        </section>
    );
};

const Book = (props) => {
    return (
      <article className='book'>
        <img src={img} alt={title} />
        <h2>{title}</h2>
        <h4>{author}</h4>
        <p>{props.job}</p> {/* props works like an object. Props is the object, job is the property, developer is the value */}
        <p>{props.title}</p> {/* First Book component doesn't have a title prop. If the prop exists, it will return value, otherwise no value. */}
        <p>{props.number}</p>
      </article>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList/>)