function createTagsField() {
  let tags = [];

  const inputHandler = event => {
    if (event.keyCode === 44 || event.keyCode === 13 || event.keyCode === 32) {
      event.preventDefault();
      let tag = event.target.value;

      if (!tags.includes(tag) && tag.length > 0) {
        addTagValue(tag);
        event.target.value = '';
      };
    };
  }

  function addTagValue(text) {

    tags.push(text);
    let div = document.createElement('div');
    div.classList.add('tags-field__item')
    div.append(text);
    section.lastElementChild.insertAdjacentElement("beforebegin", div);

  };

  function removeTag() {
    let tagsEl = document.querySelectorAll('.tags-field__item');
    let divEl = event.target.closest('.tags-field__item');

    for (let i = 0; i < tagsEl.length; i++) {
      if (divEl === tagsEl[i]) {
        tags.splice([i], 1);
        divEl.remove();

      };
    };
  }

  let section = document.createElement('section'),
    inputElement = document.createElement('input');

  section.classList.add('tags-field');
  inputElement.classList.add('tags-field__input');
  inputElement.type = 'text';
  section.append(inputElement);
  inputElement.addEventListener('keypress', inputHandler);

  document.body.append(section);
  section.addEventListener('click', removeTag);

  ////// метод destroy/////////////////
  const destroy = () => {
    inputElement.removeEventListener('keypress', inputHandler);
    section.removeEventListener('click', removeTag)
    document.body.remove(section);
  };
  ////// геттер getTags///////////////
  const getTags = () => {
    return tags;
  }

  return {
    element: section,
    destroy,
    getTags
  }

}
let tagField = createTagsField();

// Разработайте поле для ввода тегов как на видео. При вводе запятой или нажатии клавиши Enter весь введённый текст должен превратиться в тег. После можно продолжить вводить следующий тег и т.д. По клику на тег, он должен удалиться из текстового поля. Поле для тегов должно создаваться программно следующим образом:
// let tagField = createTagsField();
// document.body.append(tagField.element);

// Свойство tagField.element содержит готовое поле для тегов с добавленными обработчиками событий. Кроме этого, объект tagField должен содержать два метода: getTags() - возвращает массив всех тегов введённых на данный момент, destroy() - удаляет поле для тегов со страницы и удаляет все обработчики событий для этого поля.

