class Api {
  // ⭐️ В чем задача класса?
    // общаться с сервером: отправлять ему GET POST PATCH PUT DELETE запросы и обрабатывать ответы
  // 👾 Какие данные хранит класс?
    // хороший вопрос! он слой, -- идентификатор группы, токен (шаг обмена логина и пароля на токен был пропущен, ибо реализация неделя)
  // 🎭 Классу нужны приватные или публичные методы?
    // публичные для отправки запросов
        // приватный метод _getResponseData -- обработка ответа от сервера
  // 🏛 Как устроена архитектура наследования?
    //никак. этот класс такой один без родителя без наследника >>> the enter

  constructor({ baseUrl, authorization }) {
    this._baseUrl = baseUrl;
    this._authorization = authorization;
  }

  _getResponseData(res) {
    return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
  }

  getInitialCards() {
    return fetch(`${this._baseUrl}cards`, {
      headers: {authorization: this._authorization}
    })
    .then((res) => this._getResponseData(res));
  }


  postNewCard(data) {
    return fetch(`${this._baseUrl}cards`, {
      method: 'POST',
      headers: { authorization: this._authorization,
      'content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then((res) => this._getResponseData(res));
  }

  getUserInfo() {
    return fetch(`${this._baseUrl}users/me`, {
      headers: {authorization: this._authorization}
    })
    .then((res) =>  this._getResponseData(res));
  }

  deleteCard(card) {
    return fetch(`${this._baseUrl}cards/${card['id']}`, {
      method: 'DELETE',
      headers: {
        authorization: this._authorization
      }
    })
    .then((res) => this._getResponseData(res));
  }

  editUserInfo(data) {
    return fetch(`${this._baseUrl}users/me`, {
      method: 'PATCH',
      headers: {
        authorization: this._authorization,
        'content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then((res) => this._getResponseData(res));
  }

  editUserAvatar(avatar) {
    return fetch(`${this._baseUrl}users/me/avatar`, {
      method: 'PATCH',
      headers: {
        authorization: this._authorization,
        'content-type': 'application/json'
      },
      body: JSON.stringify(avatar)
    })
    .then((res) => this._getResponseData(res));
  }

  like(card, isLiked) {
    return fetch(`${this._baseUrl}cards/${card._id}/likes`, {
      method: isLiked ? 'DELETE' : 'PUT',
      headers: {
        authorization: this._authorization
      }
    })
    .then((res) => this._getResponseData(res));
  }
}

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-46/',
  authorization: 'b5225d24-020a-49f6-8bcd-ca1813713eea'
});

export default api;


