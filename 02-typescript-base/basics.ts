// number
// boolean
// string
// object
// Array
// Tuple
// Enum
// any

const add = (n1: number, n2: number, isPrint: boolean, phrase: string) => {
    const result = n1 + n2
    if (isPrint) {
        console.log(phrase + result)
        return
    }
    return result
}

const num1 = 2
const num2 = 1.1
const printRes = true
const phrase = 'Res is: '

add(num1, num2, printRes, phrase)
