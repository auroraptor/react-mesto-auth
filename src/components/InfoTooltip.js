function InfoTooltip(props) {
  const successMessage = `Вы успешно\n зарегистрировались!`
  const errorMessage = `Что-то пошло не так!\n Попробуйте ещё раз.`

  return (
    <div className={props?.isOpen ? 'popup_opened popup': 'popup'}>
    <div className="info">
      <button type="button" className="popup__close-icon" aria-label="Закрыть" onClick={props?.onClick}/>
      <div className="info">
        <div className={`info_type_${props?.success ?'success':'warning'}`}/>
        <p className="info__text">{props?.success ?successMessage : errorMessage}</p>
       </div>
      </div>
    </div>
  )
}

export default InfoTooltip
