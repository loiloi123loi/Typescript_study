enum Role {
    ADMIN,
    AUTHOR,
    READ_ONLY,
}

type Combinable = number | string

// const person: {
//     name: string
//     age: number
//     hobbies: string[]
//     role: [number, string]
// } = {
const person = {
    name: 'loi',
    age: 23,
    hobbies: ['Sports', 'Cooking'], // array
    role: Role.ADMIN,
}

console.log(person)
