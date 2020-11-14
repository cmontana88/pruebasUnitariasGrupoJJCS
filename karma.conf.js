// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html
const chromeHeadlessSupported = os.platform() !== 'win32' || Number((os.release().match(/^(\d+)/) || ['0', '0'])[1]) >= 10;

process.env.CHROME_BIN = require('puppeteer').executablePath()

module.exports = function (config) {
  config.set({
    basePath: '',
    browsers: [
      chromeHeadlessSupported ? 'ChromeHeadless' : 'Chrome'
    ],
    customLaunchers: {
      ChromeHeadless: {
          base: 'Chrome',
          flags: ['--no-sandbox', '--headless', '--disable-gpu', '--remote-debugging-port=9222']
      }
    },
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('@angular-devkit/build-angular/plugins/karma'),
      require('karma-junit-reporter')
    ],
    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    coverageIstanbulReporter: {
      dir: require('path').join(__dirname, './coverage'),
      reports: ['html', 'lcovonly', 'text-summary'],
      fixWebpackSourcePaths: true
    },
    reporters: ['junit', 'progress', 'kjhtml'],
    junitReporter: {
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,    
    singleRun: true,
    restartOnFileChange: true
  });
};
