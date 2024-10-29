import React, { useEffect, useState } from "react";
import GLightbox from "glightbox";
import Isotope from "isotope-layout";
import Swiper from "swiper";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "swiper/swiper-bundle.min.css";

const MainComponent = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileNavActive, setMobileNavActive] = useState(false);

  useEffect(() => {
    // Scroll Effects
    const toggleScrolled = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", toggleScrolled);
    return () => window.removeEventListener("scroll", toggleScrolled);
  }, []);

  useEffect(() => {
    // Mobile Nav Toggle
    const handleNavToggle = () => {
      setMobileNavActive(!mobileNavActive);
    };
    document.querySelector(".mobile-nav-toggle")?.addEventListener("click", handleNavToggle);
    return () => document.querySelector(".mobile-nav-toggle")?.removeEventListener("click", handleNavToggle);
  }, [mobileNavActive]);

  useEffect(() => {
    // Preloader Removal
    const preloader = document.querySelector("#preloader");
    if (preloader) {
      preloader.remove();
    }
  }, []);

  useEffect(() => {
    // AOS Initialization
    AOS.init({ duration: 600, easing: "ease-in-out", once: true });
  }, []);

  useEffect(() => {
    // Glightbox Initialization
    GLightbox({ selector: ".glightbox" });
  }, []);

  useEffect(() => {
    // Isotope Layout and Filter
    document.querySelectorAll(".isotope-layout").forEach((isotopeItem) => {
      const layout = isotopeItem.getAttribute("data-layout") ?? "masonry";
      const filter = isotopeItem.getAttribute("data-default-filter") ?? "*";
      const sort = isotopeItem.getAttribute("data-sort") ?? "original-order";

      let initIsotope;
      imagesLoaded(isotopeItem.querySelector(".isotope-container"), () => {
        initIsotope = new Isotope(isotopeItem.querySelector(".isotope-container"), {
          itemSelector: ".isotope-item",
          layoutMode: layout,
          filter: filter,
          sortBy: sort,
        });
      });

      isotopeItem.querySelectorAll(".isotope-filters li").forEach((filters) => {
        filters.addEventListener("click", function () {
          isotopeItem.querySelector(".isotope-filters .filter-active").classList.remove("filter-active");
          this.classList.add("filter-active");
          initIsotope.arrange({
            filter: this.getAttribute("data-filter"),
          });
          if (typeof AOS.init === "function") {
            AOS.init();
          }
        });
      });
    });
  }, []);

  useEffect(() => {
    // Swiper Initialization
    document.querySelectorAll(".init-swiper").forEach((swiperElement) => {
      const config = JSON.parse(swiperElement.querySelector(".swiper-config").innerHTML.trim());
      new Swiper(swiperElement, config);
    });
  }, []);

  return (
    <div>
      <header id="header" className={isScrolled ? "scrolled" : ""}>
        {/* Header content */}
      </header>
      <button className="mobile-nav-toggle" onClick={() => setMobileNavActive(!mobileNavActive)}>
        {mobileNavActive ? <i className="bi bi-x"></i> : <i className="bi bi-list"></i>}
      </button>
      <div id="preloader" />
      {/* Content components */}
      <a href="#top" className="scroll-top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
        Scroll to Top
      </a>
      {/* Other sections and components */}
    </div>
  );
};

export default MainComponent;
