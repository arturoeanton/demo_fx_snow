class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}

function greeter(): Greeter {
    let greeter = new Greeter("world");

    return greeter
}