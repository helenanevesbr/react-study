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

  /*const handleFormInput = () => {
    console.log('handle form input');
  };
  const handleButtonClick = () => {
    alert('handle button click');
  };

  Instead of setting up these functions here, we can pass them as anonymous functions (in this case, arrow functionsy into the React element...
  */
  
  return <section>
    <form>
      <h2>Typical form</h2>
      <input
        type='text'
        name='example'
        onChange={()=> console.log('handle form input')} /*... like this... */
        style={{ margin: '1rem 0'}}
      />
    </form>
    <button onClick={() => alert('handle button click')}> {/*... and this */}
      click me
    </button>
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