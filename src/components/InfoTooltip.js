function InfoTooltip(props) {
  let isSuccess = true;
  const successMessage = `Вы успешно\n зарегистрировались!`
  const errorMessage = `Что-то пошло не так!\n Попробуйте ещё раз.`

  return (
    <div className="popup popup_opened">
    <div className="popup__container">
      <button type="button" className="popup__close-icon" aria-label="Закрыть"></button>
      <div className="info">
        <div className={`info_type_${isSuccess?'success':'warning'}`}/>
        <p className="info__text">{isSuccess?successMessage:errorMessage}</p>
       </div>
      </div>
    </div>
  )
}

export default InfoTooltip
