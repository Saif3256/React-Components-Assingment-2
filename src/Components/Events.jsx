import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; 
import { Autoplay, Pagination } from 'swiper';

const eventsData = [
  {
    title: "Birthday Parties",
    price: "$189",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "assets/img/events-slider/events-slider-1.jpg",
    features: [
      "Ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "Duis aute irure dolor in reprehenderit in voluptate velit.",
      "Ullamco laboris nisi ut aliquip ex ea commodo consequat."
    ]
  },
  {
    title: "Private Parties",
    price: "$290",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "assets/img/events-slider/events-slider-2.jpg",
    features: [
      "Ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "Duis aute irure dolor in reprehenderit in voluptate velit.",
      "Ullamco laboris nisi ut aliquip ex ea commodo consequat."
    ]
  },
  {
    title: "Custom Parties",
    price: "$99",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "assets/img/events-slider/events-slider-3.jpg",
    features: [
      "Ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "Duis aute irure dolor in reprehenderit in voluptate velit.",
      "Ullamco laboris nisi ut aliquip ex ea commodo consequat."
    ]
  }
];

const Events= () => {
  return (
    <section id="events" className="events section">
      <img className="slider-bg" src="assets/img/events-bg.jpg" alt="" data-aos="fade-in" />

      <div className="container">
        <Swiper
          loop={true}
          speed={600}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            el: '.swiper-pagination',
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          className="init-swiper"
        >
          {eventsData.map((event, index) => (
            <SwiperSlide key={index}>
              <div className="row gy-4 event-item">
                <div className="col-lg-6">
                  <img src={event.image} className="img-fluid" alt={event.title} />
                </div>
                <div className="col-lg-6 pt-4 pt-lg-0 content">
                  <h3>{event.title}</h3>
                  <div className="price">
                    <p><span>{event.price}</span></p>
                  </div>
                  <p className="fst-italic">{event.description}</p>
                  <ul>
                    {event.features.map((feature, idx) => (
                      <li key={idx}>
                        <i className="bi bi-check2-circle"></i> <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <p>
                    Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                    velit esse cillum dolore eu fugiat nulla pariatur
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-pagination"></div>
      </div>
    </section>
  );
};

export default Events;
