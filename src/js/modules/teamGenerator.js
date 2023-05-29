export default class TeamGenerator {
  // конструктор создаёт пустой Set для персонажей
  constructor() {
    this.members = new Set();
  }

  // добавить персонажа в Set
  add(character) {
    this.members.add(character);
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

  // Дз №11 Символы и генераторы
  * [Symbol.iterator]() {
    this.toArray();
    for (let i = 0; i < this.membersArr.length; i += 1) {
      yield this.membersArr[i];
    }
  }
}
