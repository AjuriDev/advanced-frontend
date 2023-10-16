import joinClassNames from './joinClassNames';

describe('joinClassNames', () => {
  test('with only first param', () => {
    expect(joinClassNames('someClass')).toBe('someClass');
  });

  test('with mods boolean truly', () => {
    const expected = 'someClass disabled';
    expect(joinClassNames(
      'someClass',
      { disabled: true },
    )).toBe(expected);
  });

  test('with mods boolean falsy', () => {
    const expected = 'someClass';
    expect(joinClassNames(
      'someClass',
      { disabled: false },
    )).toBe(expected);
  });

  test('with mods boolean different', () => {
    const expected = 'someClass disabled';
    expect(joinClassNames(
      'someClass',
      { disabled: true, readOnly: false },
    )).toBe(expected);
  });

  test('with mods string', () => {
    const expected = 'someClass hovered';
    expect(joinClassNames(
      'someClass',
      { hovered: 'yes' },
    )).toBe(expected);
  });

  test('with mods empty string', () => {
    const expected = 'someClass';
    expect(joinClassNames(
      'someClass',
      { hovered: '' },
    )).toBe(expected);
  });

  test('with mods different', () => {
    const expected = 'someClass disabled hovered';
    expect(joinClassNames(
      'someClass',
      { disabled: true, hovered: 'yes' },
    )).toBe(expected);
  });

  test('with additional class', () => {
    const expected = 'someClass class1 class2';
    expect(joinClassNames(
      'someClass',
      undefined,
      ['class1', 'class2'],
    )).toBe(expected);
  });

  test('with all params', () => {
    const expected = 'someClass disabled hovered class1 class2';
    expect(joinClassNames(
      'someClass',
      { disabled: true, hovered: 'yes' },
      ['class1', 'class2'],
    )).toBe(expected);
  });
});
