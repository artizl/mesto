//Section отвечает за отрисовку элементов на странице
export default class Section  {
  constructor(renderer, containerSelector) {
    //Свойство renderer — это функция, которая отвечает за создание и отрисовку данных на странице
    this._renderer = renderer;
    //селектор контейнера, в который нужно добавлять созданные элементы
    this._container = document.querySelector(containerSelector);
  };

  //метод addItem, который принимает DOM-элемент и добавляет его в контейнер
  addItem(element) {
    this._container.prepend(element);
  }

  //метод, который отвечает за отрисовку всех элементов
  renderItems(dataCards) {
    dataCards.forEach(item => {
      this._renderer(item);
    });
  }
};