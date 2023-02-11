import Title from './Title';
import {services} from '../data';

const Services = () => {
  return(
    <section className="section services" id="services">

      <Title title='our' subTitle='services'/>

      <div className="section-center services-center">

        {services.map((service)=>{
          return(

            <article className="service" key={service.id}>
            {/* always add key attribute to the parent React element.
            Article is one level above the elements which will render the props*/}

              <span className="service-icon"><i className={service.icon}></i></span>
              <div className="service-info">
                <h4 className="service-title">{service.title}</h4>
                <p className="service-text">{service.text}</p>
              </div>

            </article>
          )
        })}

      </div>
    </section>
  );
}
  
export default Services;