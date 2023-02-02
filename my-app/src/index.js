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
    return (
        <h4
        style={{color:'#617d98', fontSize: '0.75rem', marginTop: '0.5rem'}}>
            {/*{} in JSX means going back to JS Land. That's how we add styles using JSX instead of external stylesheets (CSS). That's also how we wrote this comment*/}
            Bonnie Garmus
        </h4>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList/>)