export default class UserInfo  {
  constructor(profileConfig) {
    this._nameProfile = document.querySelector(profileConfig.nameSelector);
    this._jobProfile = document.querySelector(profileConfig.jobSelector);
    this._avatarProfile = document.querySelector(profileConfig.avatarSelector);
    };

    //getUserInfo возвращает объект с данными пользователя
    getUserInfo() {
      const dataUser = {};
      dataUser.name = this._nameProfile.textContent;
      dataUser.about = this._jobProfile.textContent;
      return dataUser;
    }

    //setUserInfo принимает новые данные пользователя и добавляет их на страницу
    setUserInfo({ name, about, avatar}) {
      this._nameProfile.textContent = name;
      this._jobProfile.textContent = about;
      this._avatarProfile.src = avatar;
    }

    getUserId(data) {
      return data.id;
    }
};