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

  {/*In JS the function triggered by the event is called callback function.
  In React, it's called referenced function - a React event inside a React element references a function.
  In this case, the functions are handleFormInput and handleButtonClick*/}

  const handleFormInput = (e) => {
    /*In JS, a callback function has access to an Event Object. In React, it's no different.
    This referenced function has recieved the Event Object as an argument, which we've randomly named "e"

    console.log(typeof e); --> object

    To better understand the Event Object and it's pŕoperties (which are configured by React), we will log some of them in our console:
    */

    console.log(e.target); // <input type="text" name="example" style="margin: 1rem 0px;">
    console.log(e.target.name); // 'example'
    console.log(e.target.value); // 'this is the text I've typed'
    console.log('handle form input');
  };
  const handleButtonClick = () => {
    alert('handle button click');
  };
  
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
    <button onClick={handleButtonClick}>click me</button>
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