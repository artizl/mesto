//Section отвечает за отрисовку элементов на странице
export default class Section  {
  constructor({ items, renderer }, containerSelector) {
    //Свойство items — это массив данных, которые нужно добавить на страницу при инициализации класса
    this._items = items;
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
  renderItems() {
    this._items.forEach(item => {
      this._renderer(item);
    });
  }
};