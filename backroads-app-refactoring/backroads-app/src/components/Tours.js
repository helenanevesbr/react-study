import Title from './Title';
import Tour from './Tour';

const Tours = () => {
  return(
    <section className="section" id="tours">

      <Title title='featured' subTitle='tours'/>

      <div className="section-center featured-center">
        <Tour />
      </div>
    </section>
  );
}
  
export default Tours;