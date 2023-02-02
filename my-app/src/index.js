import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
// css rules still apply (inline vs external css)

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
    return (
        <article className='book'>
            <Image/>
            <Title/>
            <Author/>
        </article>
    );
};

const Image = () => <h2>
    <img
    src="./images/lessonsinchesmitry.jpg" 
    alt='Lessons in Chemistry: A Novel'/>
</h2>;

const Title = () => <h2>Lessons in Chemistry: A Novel</h2>;

const Author = () => {

    const inlineHeadingStyles = {
        color: '#617d98',
        fontSize: '0.75rem',
        marginTop: '0.5rem',
      };
    {/*The styles we added at component Author are, essentially, key/value pairs  of an object. Therefore, we an add them as an object apart from the h4 element
    */}

    return (
        <h4
        style={inlineHeadingStyles}>
            Bonnie Garmus
        </h4>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList/>)