import Icon from "../Icon";
import scss from "./about.module.scss";

import mobile1x from "../../assets/about/dress-phone@1x.png";
import mobile2x from "../../assets/about/dress-phone@2x.png";

import tablet1x from "../../assets/about/dress-tablet@1x.png";
import tablet2x from "../../assets/about/dress-tablet@2x.png";

import laptop1x from "../../assets/about/dress-laptop@1x.png";
import laptop2x from "../../assets/about/dress-laptop@2x.png";

import desktop1x from "../../assets/about/dress-desktop@1x.png";
import desktop2x from "../../assets/about/dress-desktop@2x.png";

export default function About() {
  return (
    <section className={scss.about} id="about">
      <div className="container">
        <div className={scss.about__content}>
          <div className={scss.about__main}>
            <h3 className={scss.about__title} data-aos="fade-right">
              Über uns
            </h3>
            <div className={scss.about__txtBlock}>
              <p
                className={scss.about__txt}
                data-aos="fade-right"
                data-aos-delay="200"
              >
                Der Laden „Vyshyvanka Vibes” ist ein Ort, an dem traditionelle
                ukrainische Vyshyvanka mit neuer Lebendigkeit und neuem Stil zum
                Leben erweckt wird. Unser Laden bietet eine große Auswahl an
                hochwertigen und authentischen Stickereien, die die Eleganz
                traditioneller Handarbeit mit modernem Design verbinden.
              </p>
              <p
                className={scss.about__txt}
                data-aos="fade-right"
                data-aos-delay="200"
              >
                In „Vyshyvanka Vibes” finden Sie verschiedene Modelle von
                Stickereien, von klassisch bis modern, die den neuesten
                Modetrends entsprechen. Unsere Stickereien werden aus
                natürlichen Stoffen hergestellt und von hochqualifizierten
                Handwerkern gestickt, die die Schönheit der ukrainischen Kultur
                in jedem Detail zum Ausdruck bringen. Wir glauben, dass
                Vyshyvanka nicht nur Kleidung ist, sondern ein Symbol für
                Nationalstolz, das Erbe unserer Vorfahren und eine Möglichkeit,
                die eigene Individualität zum Ausdruck zu bringen. Jede
                Stickerei von „Vyshyvanka Vibes“ hat ihre eigene einzigartige
                Geschichte und Symbolik, die ihr eine besondere Bedeutung
                verleiht.
              </p>
            </div>
          </div>
          <div className={scss.about__visual}>
            <picture className={scss.about__imageBlock}>
              <source
                media="(min-width: 1440px)"
                srcSet={`${desktop1x} 1x, ${desktop2x} 2x`}
              />

              <source
                media="(min-width: 1280px)"
                srcSet={`${laptop1x} 1x, ${laptop2x} 2x`}
              />

              <source
                media="(min-width: 768px)"
                srcSet={`${tablet1x} 1x, ${tablet2x} 2x`}
              />

              <img
                src={mobile1x}
                srcSet={`${mobile1x} 1x, ${mobile2x} 2x`}
                alt="Опис зображення"
                className={scss.about__image}
                loading="lazy"
                data-aos="fade-left"
                data-aos-delay="400"
              />
            </picture>

            <div
              className={scss.about__bgWrapper}
              data-aos="zoom-in-left"
              data-aos-delay="500"
              data-aos-anchor-placement="bottom-bottom"
            >
              <Icon name="ornament-white" className={scss.about__bg} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
