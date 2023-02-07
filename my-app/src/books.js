import img1 from './images/interestingfactsforthecuriousmind.jpg';
import img2 from './images/lessonsinchesmitry.jpg';
import img3 from './images/flawed.jpg';

/* when React builds our application, it optimizes the assets, including images.
for better performance, you can import local images from src rather than the public folder

the downside is that you have to import the images one by one. Not a smart choice when you have many images*/

export const books = [
    {
      author: 'Jordan Moore',
      title: 'Interesting Facts For Curious Minds',
      img: img1,
      id: 1,
    },
    
    {
      author: "Bonnie Garmus",
      title: "Lessons in Chemistry: A Novel",
      img: img2,
      id: 2,
    },

    {
      author: "Kate Avelynn",
      title: "Flawed",
      img: img3,
      id: 3,
    }
]