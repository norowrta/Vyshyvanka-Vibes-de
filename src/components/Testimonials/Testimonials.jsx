import scss from "./testimonials.module.scss";

import TestimonialsSlider from "./TestimonialsSlider";

export default function Testimonials() {
  return (
    <section className={scss.testimonials} id="testimonials">
      <div className="container">
        <div className={scss.testimonials__content}>
          <h3 className={scss.testimonials__title} data-aos="fade-right">
            Kundenstimmen
          </h3>
          <div className={scss.Testimonials__main}>
            <TestimonialsSlider />
          </div>
        </div>
      </div>
    </section>
  );
}
