import Team from '../team';

const alex = {
  name: 'ALex',
  type: 'Zombie',
  attack: 40,
  defence: 10,
  health: 100,
  level: 1,
};

const vova = {
  name: 'Vova',
  type: 'Magician',
  attack: 10,
  defence: 40,
  health: 100,
  level: 1,
};

test('Team add', () => {
  const team = new Team();
  team.add(alex);
  team.add(alex);
  team.add(vova);

  const expected = new Set([alex, alex, vova]);

  expect(team.members).toEqual(expected);
});

test('Team addAll', () => {
  const team = new Team();
  team.addAll(alex, vova);
  team.addAll(alex, vova);
  team.addAll(alex);

  const expected = new Set([alex, vova]);

  expect(team.members).toEqual(expected);
});

test('Team addAll and toArray', () => {
  const team = new Team();
  team.addAll(alex, vova);
  team.toArray();

  const expected = [alex, vova];

  expect(team.membersArr).toEqual(expected);
});

// Тесты для Дз №11
describe('Test for HW №11', () => {
  const teamOne = new Team();
  teamOne.addAll(alex, vova);

  test.each([alex, vova])('iterators next', (expected) => {
    expect(teamOne.next().value).toEqual(expected);
  });

  test('iterators loops', () => {
    const teamTwo = new Team();
    teamTwo.addAll(alex, vova);
    const expected = [alex, vova];
    const result = [];

    for (const person of teamTwo) {
      result.push(person);
    }

    expect(result).toEqual(expected);
  });
});
