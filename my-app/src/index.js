import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

import { books } from './books';

import Book from './Book';

function BookList() {
  return (

    /* <h1>Best Sellers in Books</h1>
    <section>[...]</section>
    )
    // we can't return two adjacent elements. The code above would throw an error...
    */

    <> {/*... that's why we wrapped everything inside the same parent element... */}

      <h1>Best Sellers in Books</h1>

      <section className='booklist'>
        {books.map((book, index)=>{ //The index is used inside the map() method to state the position of each element in an array

          return <Book
            {...book}
            key={book.id}
            number={index}
          />;

        })}
      </section>

    </> /*... like this */
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList/>)