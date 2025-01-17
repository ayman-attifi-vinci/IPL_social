// filepath: /c:/bloc2/devops/propreDev/IPL_social/spec/appSpec.js
import isValidPassword from '../src/passwordChecker.js';

describe('Password validation', () => {
    it('Valid password should pass all checks', () => {
        expect(isValidPassword('Valid123!')).toBe(true);
    });
    it('Password should be at least 8 characters long', () => {
      expect(isValidPassword('short')).toBe(false);
    });
    it('Password should contain at least one special character', () => {
      expect(isValidPassword('nosp3cial')).toBe(false);
    });

});