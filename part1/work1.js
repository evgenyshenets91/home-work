'use strict'
//#1
function polygonPoints(arr) {

  let result = [];
  arr.forEach(function (item) {
    result.push(Object.values(item))
  });
  return (result.join(' '));
}

let array = [{x:12, y:13}, {x:56, y: 45}, {x:526, y: 15}, {x:123, y: 425}];
console.log(polygonPoints(array));

//#2
function uniqueArr(arr) {

  let result = arr.filter(function (item, i) {
    return arr.indexOf(item) == i && arr.lastIndexOf(item) == i;
  });

  return result;
}

let array2 = [1, 4, 11, 61, 4, 11, 1, 21, 22, 2124, 1];
console.log(uniqueArr(array2));

//#3
function strToHtml(str) {
  let arr = str.split(' \n');
  for (let i = 0; i < arr.length; i++) {
    if (i === 0) {
      arr[i] = makeH1(arr[i]);
    } else {
      arr[i] = makeParagraph(arr[i]);
    }
  };

  return arr.join('');
};

function makeH1(item) {
  return `<h1>${item}</h1>`;
}

function makeParagraph(item) {
  return `<p>${item}</p>`;
}

console.log(strToHtml("asdasd \n1sdffffffffff23dsdf \nGssdgggggggggggdffsdfsdf"))

// 1 - Напишите функцию, которая получает в качестве аргумента массив объектов координат и превращает его в строку, подходящую для атрибута points  svg-тега <polygon>. 
// Пример массива:
// [{x:12, y:13}, {x:56, y: 45}, ...]
// Длина массива может быть любой, как и числа в свойствах x и y.
// 2 - Напишите функцию, которая будет получать в качестве аргумента массив чисел, и будет возвращать массив только тех чисел, которые не повторяются.
// 3 - Напишите функцию, которая в качестве аргумента будет получать string-у с многострочным текстом, и будет преобразовывать её в string с html-кодом, где текст с первой строки должен стать заголовком первого уровня, а все остальные строки должны стать абзацами.