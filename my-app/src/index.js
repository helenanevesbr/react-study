import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

const BookList = () => {
    return (
        <section className='booklist'>
            {/*In React, you don't have class, you just have className. It's important to remember that while adding css to your application */}
            <Book />
            <Book />
            <Book />
            <Book />
        </section>
    );
};

const Book = () => {
    return (
        <article className='book'>
            <Image/>
            <Title/>
            <Author/>
        </article>
    );
};

const Image = () => <h2><img src="./images/lessonsinchesmitry.jpg" alt='Lessons in Chemistry: A Novel'/></h2>;
const Title = () => <h2>Lessons in Chemistry: A Novel</h2>;
const Author = () => {
    return <h4>Bonnie Garmus</h4>;
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList/>)