export default class UserInfo  {
  constructor(profileConfig) {
    this._nameProfile = document.querySelector(profileConfig.nameSelector);
    this._jobProfile = document.querySelector(profileConfig.jobSelector);
    };

    //getUserInfo возвращает объект с данными пользователя
    getUserInfo() {
      const dataUser = {};
      dataUser.name = this._nameProfile.textContent;
      dataUser.job = this._jobProfile.textContent;
      return dataUser;
    }

    //setUserInfo принимает новые данные пользователя и добавляет их на страницу
    setUserInfo({ name, job }) {
      this._nameProfile.textContent = name;
      this._jobProfile.textContent = job;
    }
};