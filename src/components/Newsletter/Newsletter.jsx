import scss from "./newsletter.module.scss";
import Icon from "../Icon";

import imgTablet1x from "../../assets/newsletter/shirt-tablet@1x.png";
import imgTablet2x from "../../assets/newsletter/shirt-tablet@2x.png";

import imgLaptop1x from "../../assets/newsletter/shirt-laptop@1x.png";
import imgLaptop2x from "../../assets/newsletter/shirt-laptop@2x.png";

import imgDesktop1x from "../../assets/newsletter/shirt-desktop@1x.png";
import imgDesktop2x from "../../assets/newsletter/shirt-desktop@2x.png";

export default function Newsletter() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className={scss.newsletter} id="newsletter">
      <div className="container">
        <div className={scss.newsletter__content}>
          <div className={scss.newsletter__pictureWrapper}>
            <picture className={scss.newsletter__imgWrapper}>
              <source
                media="(min-width: 1440px)"
                srcSet={`${imgDesktop1x} 1x, ${imgDesktop2x} 2x`}
              />

              <source
                media="(min-width: 1280px)"
                srcSet={`${imgLaptop1x} 1x, ${imgLaptop2x} 2x`}
              />

              <img
                src={imgTablet1x}
                srcSet={`${imgTablet1x} 1x, ${imgTablet2x} 2x`}
                alt="Newsletter"
                className={scss.newsletter__img}
                loading="lazy"
                data-aos="fade-right"
                data-aos-delay="400"
                data-aos-anchor-placement="bottom-bottom"
              />
            </picture>

            <div
              className={scss.newsletter__bgWrapper}
              data-aos="zoom-in-right"
              data-aos-delay="500"
              data-aos-anchor-placement="bottom-bottom"
            >
              <Icon name="ornament-white" className={scss.newsletter__bg} />
            </div>
          </div>

          <div className={scss.newsletter__main}>
            <h3 className={scss.newsletter__title} data-aos="fade-left">
              <span className={scss.newsletter__titlehighlighted}>
                Abonnieren{" "}
              </span>
              Sie unseren Newsletter, um jede Woche die neuesten Nachrichten und
              exklusiven Angebote zu erhalten.
            </h3>
            <form className={scss.newsletter__form} onSubmit={handleSubmit}>
              <input
                type="text"
                className={`${scss.newsletter__formInput}`}
                placeholder="Vor- und Nachname"
                data-aos="fade-left"
                data-aos-delay="200"
                data-aos-anchor-placement="bottom-bottom"
              />
              <input
                type="email"
                className={`${scss.newsletter__formInput}`}
                placeholder="Ihre E-Mail-Adresse"
                data-aos="fade-left"
                data-aos-delay="250"
                data-aos-anchor-placement="bottom-bottom"
              />
              <textarea
                className={`${scss.newsletter__formInput} ${scss.newsletter__formInputLast}`}
                placeholder="Kommentare"
                data-aos="fade-left"
                data-aos-delay="300"
                data-aos-anchor-placement="bottom-bottom"
              />
              <button
                type="submit"
                className={scss.newsletter__formBtn}
                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-anchor-placement="bottom-bottom"
              >
                Senden
                <Icon name="arrow" className={scss.newsletter__arrowIcon} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
