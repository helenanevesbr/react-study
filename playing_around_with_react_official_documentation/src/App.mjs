import { useState } from 'react';

const user = {
    name: 'Hedy Lamarr',
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 90,
  };
  
export function Profile() {
  return (
    <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
    </>
  );
}

export function MyButtons(){
  const [count,setCount] = useState(0);

  function handleClick() {
    setCount(count+1);
  }

  return (
    <div>
      <h1>Counters that update together</h1>
      <MyButton count={count} onClick={handleClick} />
      <MyButton />
    </div>
  );
}

function MyButton({count, onClick}){
  return(
    <button onClick={onClick}>
      Clicked {count} times
    </button>
  );
}

