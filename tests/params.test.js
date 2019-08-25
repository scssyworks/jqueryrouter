import { extractParams } from '../src/js/utils/params';

describe('Params module', function () {
    test('Function extractParams should extracts parameters from URL', () => {
        expect(extractParams('/test/:part1/:part2', '/test/value1/value2')).toEqual({ part1: 'value1', part2: 'value2' });
    });
    test('Function extractParams should return empty object if there are no matching parameters', () => {
        expect(extractParams('/test/:part1/:part2', '/test/value1')).toEqual({});
    });
});