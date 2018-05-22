class HelloWorld {
    sayHello(event) {
        return {
            message: 'Did it work?! Guess so',
            input: event,
        };
    }
}
    
module.exports = HelloWorld;