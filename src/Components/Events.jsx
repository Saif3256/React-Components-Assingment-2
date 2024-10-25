// src/components/Events.js
import React from 'react';
import '../styles/Events.css'; // You can create this CSS file to handle styles for the Events component

const eventsData = [
  {
    title: "Birthday Parties",
    price: "$189",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    features: [
      "Ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "Duis aute irure dolor in reprehenderit in voluptate velit.",
      "Ullamco laboris nisi ut aliquip ex ea commodo consequat."
    ],
    image: "assets/img/events-slider/events-slider-1.jpg"
  },
  {
    title: "Private Parties",
    price: "$290",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    features: [
      "Ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "Duis aute irure dolor in reprehenderit in voluptate velit.",
      "Ullamco laboris nisi ut aliquip ex ea commodo consequat."
    ],
    image: "assets/img/events-slider/events-slider-2.jpg"
  },
  {
    title: "Custom Parties",
    price: "$99",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    features: [
      "Ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "Duis aute irure dolor in reprehenderit in voluptate velit.",
      "Ullamco laboris nisi ut aliquip ex ea commodo consequat."
    ],
    image: "assets/img/events-slider/events-slider-3.jpg"
  },
];

const Events = () => {
  return (
    <section id="events" className="events section">
      <img className="slider-bg" src="assets/img/events-bg.jpg" alt="" data-aos="fade-in" />

      <div className="container">
        <div className="swiper init-swiper" data-aos="fade-up" data-aos-delay="100">
          <script type="application/json" className="swiper-config">
            {JSON.stringify({
              loop: true,
              speed: 600,
              autoplay: {
                delay: 5000
              },
              slidesPerView: "auto",
              pagination: {
                el: ".swiper-pagination",
                type: "bullets",
                clickable: true
              }
            })}
          </script>
          <div className="swiper-wrapper">
            {eventsData.map((event, index) => (
              <div className="swiper-slide" key={index}>
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
                      {event.features.map((feature, featureIndex) => (
                        <li key={featureIndex}>
                          <i className="bi bi-check2-circle"></i> <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <p>
                      Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </div>
    </section>
  );
};

export default Events;
