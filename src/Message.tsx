function Message(){
    let name: string = 'Simon';
    let age: number = 24;
    const greetings: string = Greet(name, age);
    return <h1>{greetings}</h1>
}

export function Greet(name: string, age: number): string{
    return `Hi! Your name is ${name} and you are ${age} years old!`
}

// export default {Message, Greet}
export default Message
