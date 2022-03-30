const utils = require("../../src/misc/utils");

describe('misc/utils.js', () => {
    it('should validate urls with isValidURL', () => {
        const tests = {
            // 'url': isValid,
            'https://github.com/SimosNap/MediaBot/blob/main/package.json': true,
            '//github.com/SimosNap/MediaBot/blob/main/package.json': false,
        };

        for (const [url, isValid] of Object.entries(tests)) {
            expect(utils.isValidURL(url)).toBe(isValid);
        }
    });
});
