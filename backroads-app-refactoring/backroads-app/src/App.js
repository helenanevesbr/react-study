/* This is the root component, where all components are going to meet */

function App() {

  console.log('hello')
  /* Because App component is wrapped in Strict Mode (see index.js), it's going to render 'hello' twice*/

  return (
    <h1>backroads app</h1>
  );
}

export default App;
