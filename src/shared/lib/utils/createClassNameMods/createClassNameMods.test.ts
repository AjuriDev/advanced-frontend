import createClassNameMods from './createClassNameMods';

describe('createClassNameMods', () => {
  test('empty', () => {
    const cls = {
      common: 'commonHash',
      loading: 'loadingHash',
    };
    const expected = {};
    expect(createClassNameMods([], cls))
      .toEqual(expected);
  });
  test('with strings', () => {
    const cls = {
      common: 'commonHash',
      loading: 'loadingHash',
    };
    const expected = {
      commonHash: 'common',
      loadingHash: 'loading',
    };
    expect(createClassNameMods(['common', 'loading'], cls))
      .toEqual(expected);
  });
  test('with string and truly', () => {
    const cls = {
      common: 'commonHash',
      loading: 'loadingHash',
    };
    const expected = {
      commonHash: 'common',
      loadingHash: 'loading',
    };
    expect(createClassNameMods(['common', true && 'loading'], cls))
      .toEqual(expected);
  });
  test('with string and falsy', () => {
    const cls = {
      common: 'commonHash',
      loading: 'loadingHash',
    };
    const expected = {
      commonHash: 'common',
    };
    expect(createClassNameMods(['common', false && 'loading'], cls))
      .toEqual(expected);
  });
  test('with string and null', () => {
    const cls = {
      common: 'commonHash',
      loading: 'loadingHash',
    };
    const expected = {
      commonHash: 'common',
    };
    expect(createClassNameMods(['common', null && 'loading'], cls))
      .toEqual(expected);
  });
  test('with string and undefined', () => {
    const cls = {
      common: 'commonHash',
      loading: 'loadingHash',
    };
    const expected = {
      commonHash: 'common',
    };
    expect(createClassNameMods(['common', undefined && 'loading'], cls))
      .toEqual(expected);
  });
});
