// This custom log is for shorten your console.log()
var customLog = console.log.bind(console, 'My Custom Log:');
customLog('Hello, world!'); // Output: My Custom Log: Hello, world!
