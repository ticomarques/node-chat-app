const expect = require('expect');
const {isRealString} = require('./validation');

describe('isRealString', () => {
    it('Should reject non string values', () => {
        var res = isRealString(98);
        expect(res).toBeFalsy();
    });

    it('should reject strings with only spaces', () => {
        var res = isRealString('    ');
        expect(res).toBeFalsy();
    });

    it('should allow string with with non-space characters', () => {
        var res = isRealString('  Andrew  ');
        expect(res).toBeTruthy();
    });
});