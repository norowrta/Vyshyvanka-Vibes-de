import scss from "./collection.module.scss";
import Icon from "../Icon";

import image1x from "../../assets/collection/model2@1x.png";
import image2x from "../../assets/collection/model2@2x.png";

import CollectionSlider from "./CollectionSlider";

export default function Collection() {
  return (
    <section className={scss.collection} id="collection">
      <div className="container">
        <div className={scss.collection__content}>
          <h3 className={scss.collection__title} data-aos="fade-down">
            Unsere Kollektion
          </h3>
          <div className={scss.collection__main}>
            <CollectionSlider />

            <div
              className={scss.collection__bgWrapper}
              data-aos="zoom-in-right"
              data-aos-anchor-placement="bottom-bottom"
            >
              <Icon name="ornament-yellow" className={scss.collection__bg} />
            </div>
          </div>
        </div>
      </div>
      <img
        src={image1x}
        srcSet={`${image1x} 1x, ${image2x} 2x`}
        alt="Model"
        className={scss.collection__img}
        loading="lazy"
      />
    </section>
  );
}
