const youtube = require("../../src/misc/youtube");

describe('misc/youtube.js', () => {
    it('should extract Youtube ID', () => {
        const tests = {
            // 'test message': 'videoID',
            'This is a test http://www.youtube.com': undefined,
            'This is a test https://www.youtube.com/watch?v=sl61lHwo3YE': 'sl61lHwo3YE',
            'This is a test https://www.youtube.com/watch?v=sl61lHwo3YE with after text': 'sl61lHwo3YE',
            'This is a test [https://www.youtube.com/watch?v=sl61lHwo3YE]': 'sl61lHwo3YE',
        };

        for (const [url, videoID] of Object.entries(tests)) {
            expect(youtube.getYoutubeVideoID(url)).toBe(videoID);
        }
    });
});
