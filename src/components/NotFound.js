import notFound from "../images/404NotFound.jpg";
import Header from "./Header";

function NotFound() {
  return (
    <>
      <Header>
      </Header>

      <div className="not-found profile__container">
          <div className="profile__another-container">
            <img  src={notFound}
          alt={"Жак-Ив Кусто в красной шапке"}className="not-found__image" />
          </div>
          <div className="not-found__description">
            <h1 className="not-found__title">404</h1>
            {/* <button className="profile__edit-button" type="button" aria-label="Назад"></button> */}
            <p className="not-found__subtitle">Жак-Ив Кусто исследовал океан и даже там не нашёл эту страницу.</p>
          </div></div>

      </>
  );
}

export default NotFound;
