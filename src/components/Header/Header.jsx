import scss from "./header.module.scss";
import Icon from "../Icon";

export default function Header() {
  const toggleMenu = () => {
    document.body.classList.toggle("menu-open");
  };

  return (
    <section className={scss.header} data-aos="fade-down">
      <div className="container">
        <div className={scss.header__content}>
          <div className={scss.header__navWrapper}>
            <a href="#" className={scss.header__logoLink}>
              <Icon name="logo" width="44px" height="39px" />
            </a>

            <nav className={scss.header__nav}>
              <a href="#about" className={scss.header__navLink}>
                Über uns
              </a>
              <a href="#collection" className={scss.header__navLink}>
                Unsere Kollektion
              </a>
              <a href="#newsletter" className={scss.header__navLink}>
                Newsletter
              </a>
              <a href="#testimonials" className={scss.header__navLink}>
                Kundenstimmen
              </a>
            </nav>
          </div>
          <div className={scss.header__utility}>
            <a href="tel:+380684439426" className={scss.header__phone}>
              +380 (68) 443-94-26
            </a>
            <div className={scss.header__social}>
              <a href="#" className={scss.header__socialLink}>
                <Icon
                  name="facebook"
                  width="28px"
                  height="28px"
                  className={scss.socIcon}
                />
              </a>
              <a href="#" className={scss.header__socialLink}>
                <Icon
                  name="instagram"
                  width="28px"
                  height="28px"
                  className={scss.socIcon}
                />
              </a>
              <a href="#" className={scss.header__socialLink}>
                <Icon
                  name="youtube"
                  width="28px"
                  height="28px"
                  className={scss.socIcon}
                />
              </a>
            </div>
            <button className={scss.header__burgerMenu} onClick={toggleMenu}>
              <Icon name="nav" width="44px" height="30px" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
