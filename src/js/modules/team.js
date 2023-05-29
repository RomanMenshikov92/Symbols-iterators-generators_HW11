export default class Team {
  // конструктор создаёт пустой Set для персонажей
  constructor() {
    this.members = new Set();
    this.from = 0; // начало перечисления
    this.to = 0; // конец перечисления
  }

  // добавить персонажа в Set
  add(character) {
    if (!this.members.has(character)) {
      this.members.add(character);
    } else {
      // eslint-disable-next-line no-console
      console.log('Персонаж есть');
    }
  }

  // добавить сразу несколько персонажей в Set
  addAll(...characters) {
    characters.forEach((character) => this.members.add(character));
  }

  // конвертировать Set в Array
  toArray() {
    this.membersArr = [];
    this.members.forEach((character) => this.membersArr.push(character));
  }

  // Дз №11 Символы & итераторы
  [Symbol.iterator]() {
    return this; // сохраняем контекст для перебора в цикле
  }

  next() {
    this.toArray(); // запускаем метод конвертации Set в Array
    this.to = this.membersArr.length; // записываем конец перечисление

    if (this.from < this.to) {
      // eslint-disable-next-line no-plusplus
      return { value: this.membersArr[this.from++], done: false };
    }
    return { value: undefined, done: true };
  }
}
