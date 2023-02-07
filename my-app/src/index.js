import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

import { books } from './books';
/*named export - This export statement is useful when the imported file has more than one component.
Names MUST match - that means ~import { *name* }~ must be the same as ~export *name*~
*/

import Book from './Book';
/*with default exports, the exported component can be renamed inside the imported file.
However, there can be only one component per file */

function BookList() {
  return (
    <section className='booklist'>
      {books.map((book)=>{

        return <Book
          {...book}
          key={book.id}
        />;

      })}
    </section>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList/>)