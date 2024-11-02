
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; 
import '../styles/Testimonials.css'; 



const Testimonials = () => {
  const testimonialsData = [
    {
      img: 'assets/img/testimonials/testimonial-1.jpg',
      name: 'John Doe',
      position: 'Customer',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      img: 'assets/img/testimonials/testimonial-2.jpg',
      name: 'Jane Smith',
      position: 'Customer',
      text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    },
    {
      img: 'assets/img/testimonials/testimonial-3.jpg',
      name: 'Alice Johnson',
      position: 'Customer',
      text: 'Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit.',
    },
    // Add more testimonials as needed
  ];

  return (
    <section className="testimonials section">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>Testimonials</h2>
          <p>What our customers say</p>
        </div>

        <Swiper
          className="testimonials-carousel"
          loop={true}
          speed={600}
          autoplay={{ delay: 5000 }}
          pagination={{ clickable: true }}
        >
          {testimonialsData.map((testimonial, index) => (
            <SwiperSlide key={index} className="testimonial-item">
              <div className="testimonial-img">
                <img src={testimonial.img} alt={testimonial.name} />
              </div>
              <h3>{testimonial.name}</h3>
              <h4>{testimonial.position}</h4>
              <div className="quote-icon-left">“</div>
              <p>{testimonial.text}</p>
              <div className="quote-icon-right">”</div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
