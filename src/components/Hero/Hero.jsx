import Icon from "../Icon";
import scss from "./hero.module.scss";

import model1x from "../../assets/hero/model@1x.png";
import model2x from "../../assets/hero/model@2x.png";

export default function Hero() {
  return (
    <section className={scss.hero}>
      <div className="container">
        <div className={scss.hero__content}>
          <img
            src={model1x}
            srcSet={`${model1x} 1x, ${model2x} 2x`}
            alt="Traditional Ukrainian Artistry Model"
            className={scss.hero__img}
            loading="lazy"
            data-aos="fade-right"
            data-aos-delay="400"
          />
          <div className={scss.hero__main}>
            <h3 className={scss.hero__title} data-aos="fade-right">
              Die traditionelle{" "}
              <span className={scss.hero__titleHighlighted}>ukrainische </span>{" "}
              Handwerkskunst in jedem Stich wiederbeleben.
            </h3>
            <a
              href="#collection"
              className={scss.hero__btnOrder}
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Bestellen
              {<Icon name="arrow" className={scss.hero__btnArow} />}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
