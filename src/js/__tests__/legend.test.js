import getHealthStatus from '../legend';

test('zero health', () => {
  expect(getHealthStatus({ name: 'gamer', health: 0 })).toBe('critical');
});

test('gamer with 10% health', () => {
  expect(getHealthStatus({ name: 'gamer', health: 10 })).toBe('critical');
});

test('gamer with 15% health', () => {
  expect(getHealthStatus({ name: 'gamer', health: 15 })).toBe('wonded');
});

test('gamer with 30% health', () => {
  expect(getHealthStatus({ name: 'gamer', health: 30 })).toBe('wonded');
});

test('gamer with 50% health', () => {
  expect(getHealthStatus({ name: 'gamer', health: 50 })).toBe('wonded');
});

test('gamer with 75% health', () => {
  expect(getHealthStatus({ name: 'gamer', health: 75 })).toBe('healthy');
});

test('gamer with 100% health', () => {
  expect(getHealthStatus({ name: 'gamer', health: 100 })).toBe('healthy');
});
