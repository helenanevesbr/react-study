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
  return (
    <section className='booklist'>

      <EventExamples />

      {books.map((book)=>{
        return <Book
          {...book}
          key={book.id}
        />;
      })}

    </section>
  );
}

const EventExamples = () =>{

  const handleFormInput = () => {
    console.log('handle form input');
  };
  const handleButtonClick = () => {
    alert('handle button click');
  };
  /* The place where we set up the function is irrelevant. They can be inside of the component, they can be outside of the component, they can be coming from another file.*/
  
  return <section>
    <form>
      <h2>Typical form</h2>
      <input
        type='text'
        name='example'
        onChange={handleFormInput}
        style={{ margin: '1rem 0'}}
      />
    </form>
    <button onClick={handleButtonClick}>click me</button> {/* onClick is a React Event*/}
    {/*
    In React, the element is located in the JSX in the component and the function that gets triggered when the event (OnClick) fires can be anywhere.


    This is how it would look like in JS:

      const btn = document.getElementById('btn');

      btn.addEventListener('click', function (e) {
        // access event object. In the callback function we can access the event object which contains, for example, the element we're selecting, what value is inside of it.
        // do something when event fires
    });
    */}

  </section>
}

const Book = ({img, title, author}) => {
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