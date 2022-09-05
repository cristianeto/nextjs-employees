import { capitalizeFirstLetter } from './helpers';

describe('utils', () => {
  it('should return capitalized the first letter of a string', () => {
    const string = 'abcdefghijklmnopqrstuvwxyz';
    const result = capitalizeFirstLetter(string);
    expect(result).toBe('Abcdefghijklmnopqrstuvwxyz');
  });
});
