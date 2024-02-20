// type AddFn = (a: number, b: number) => number
interface AddFn {
    (a: number, b: number): number
}

let add: AddFn
add = (a: number, b: number) => {
    return a + b
}

interface Named {
    readonly name?: string
    outputName?: string
}

interface Greetable extends Named {
    greet(phrase: string): void
}

class Person implements Greetable {
    name?: string
    age = 22

    constructor(name?: string) {
        if (name) {
            this.name = name
        }
    }

    greet(phrase?: string): void {
        if (this.name) {
            console.log(phrase + this.name)
        } else {
            console.log('hihi')
        }
    }
}

const user1 = new Person()
user1.greet()
