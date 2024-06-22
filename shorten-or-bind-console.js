// This custom log is for shorten your console.log()

var customLog = console.log.bind(console);
customLog('Hello, world!'); // Output: Hello, world!
