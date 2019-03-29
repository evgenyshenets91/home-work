'use strict';

const myCriterias = [{
  name: 'inNotFuckWord',
  check: value => !value.includes('fuck'),
  message: value => `'${value}' is a bad word.`
}, {
  name: 'notEmptyString',
  check: value => typeof value === 'string' && value.length == 0,
  message: value => `'${value}' not an empty string.`
}];

class Validation {

  constructor(criterias) {
    this.criterias = criterias.map(elem => ({...elem, isOn: true}))
  }

  validate(input) {
    let errors = new Map(),
      valid = true,
      isOnCriterias = this.criterias.filter(el => el.isOn);

    for (let i = 0; i < isOnCriterias.length; i++) {
      if (isOnCriterias[i]['check'](input)) {
        valid = true;
      } else {
        valid = false;
        errors.set(isOnCriterias[i]['name'], isOnCriterias[i]['message'](input));
      }
    }
    return {
      valid,
      errors
    }
  }

  toggleValidator(name, state) {
    let index;
    let neededCriteria = this.criterias.find((elem, i) => {
      if (elem.name === name) {
        index = i;
      }
      return elem.name === name;
    })

    if (neededCriteria) {
      const stateToSet = state ? state : !neededCriteria.isOn;
      this.criterias[index].isOn = stateToSet;
    }
  }
}

let validateOf = new Validation(myCriterias);


// validateOf.toggleValidator('notEmptyString');
// validateOf.toggleValidator('notEmptyString');
// validateOf.toggleValidator('inNotFuckWord');
// validateOf.toggleValidator('inNotFuckWord');
// validateOf.toggleValidator('notEmptyString', true);
console.log(validateOf.validate('fuck'));
console.log(validateOf.validate('12fuck'));
console.log(validateOf.validate('asd'));
console.log(validateOf.validate(''));



// Создайте класс Validation для проверки значений по определённым критериям. Критерии проверки передаются в конструктор в виде массива объектов, где каждый объект представляет собой отдельный критерий и выглядит следующим образом:
// {
//     name: 'required' /* строка с уникальным именем критерия */,
//     check: value => { /* логика проверки, проверка прошла - вернуть  true, нет - false */ },
//     message: value => { /* возвращает строку с сообщением об ошибке */ }
// }

// Экземпляр класса Validation должен иметь два метода:
// - toggleValidator(name, state) - включает/выключает определённый критерий. name - имя критерия, state (необязательный) - boolean состояние критерия. Если state не передан, то первый вызов метода должен выключить критерий, а следующий включить и т.д.
// - validate(value) - производит проверку значения value по включённым критериям. Возвращает объект:
// {
//     valid: /* true - проверка прошла, false - нет */,
//     errors: /* Map с ошибками, где ключ это имя критерия, значение - сообщение об ошибке */
// }