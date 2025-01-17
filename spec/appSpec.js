// filepath: /c:/bloc2/devops/propreDev/IPL_social/spec/appSpec.js
import isValidPassword from '../src/passwordChecker.js';

describe('Password validation', () => {
    it('Valid password should pass all checks', () => {
        expect(isValidPassword('Valid123!')).toBe(true);
    });

});