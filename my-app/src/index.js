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
          img={firstBook.img}
        >

          <button>buy me</button>
          {/* Children Prop is everything we render between component tags.
          We mostly use it Context API, but here we are using it so we can render something (a "buy me" button) in one Book component, but not the other.
          Prop is an object. When we add a children prop like this, automatically a property called "children" is added to the object, and it's value is equal to "<button>buy m..." in our case
          To render the children prop, we have to access it... */}
          
        </Book>

        <Book
          author={secondBook.author}
          title={secondBook.title}
          img={secondBook.img} />

      </section>
    );
}

const Book = ({ img, title, author, children}) => { //... like we access every other property of prop.
  return (
    <article className='book'>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author} </h4>
      {children}
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList/>)