import scss from "./mobileNav.module.scss";
import Icon from "../Icon";

export default function MobileNav({ onClose }) {
  return (
    <section className={scss.modal}>
      <div className="container">
        <div className={scss.modal__content}>
          <div className={scss.modal__top}>
            <a href="tel:+380684439426" className={scss.modal__phone}>
              +380 (68) 443-94-26
            </a>
            <button className={scss.modal__closeBtn} onClick={onClose}>
              <Icon name="close" className={scss.modal__closeIcon} />
            </button>
          </div>
          <nav className={scss.modal__nav}>
            <a href="#about" className={scss.modal__navLink} onClick={onClose}>
              Über uns
            </a>
            <a
              href="#collection"
              className={scss.modal__navLink}
              onClick={onClose}
            >
              Unsere Kollektion
            </a>
            <a
              href="#newsletter"
              className={scss.modal__navLink}
              onClick={onClose}
            >
              Newsletter
            </a>
            <a
              href="#testimonials"
              className={scss.modal__navLink}
              onClick={onClose}
            >
              Kundenstimmen
            </a>
          </nav>
        </div>
      </div>
      <div className={scss.modal__bg}>
        <Icon name="ornament-gray" className={scss.modal__ornament} />
      </div>
    </section>
  );
}
