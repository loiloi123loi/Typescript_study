const Logger = (logString: string) => {
    return (constructor: Function) => {
        console.log(logString)
        console.log(constructor)
    }
}

function withTemplate(template: string, hookId: string) {
    return function (_: Function) {
        const hookE = document.getElementById(hookId)
        if (hookE) {
            hookE.innerHTML = template
        }
    }
}

@Logger('Logging Person')
@withTemplate('<h1>check</h1>', 'name')
class Person {
    name = 'Max'

    constructor() {
        console.log('init')
    }
}

const pers = new Person()
console.log(pers)
