abstract class Department {
    // private readonly id: string
    // private name: string
    protected employees: string[] = []
    static fiscalYear = 2020

    constructor(private readonly id: string, public name: string) {
        // this.id = id
        // this.name = name
    }

    abstract describe(this: Department): void

    addEmployee(employee: string) {
        this.employees.push(employee)
    }

    printEmployeeInfo() {
        console.log(this.employees.length)
        console.log(this.employees)
    }

    static createEmployee(name: string) {
        return { name: name }
    }
}

class ITDepartment extends Department {
    constructor(id: string, public admins: string[]) {
        super(id, 'IT')
    }

    describe(this: Department): void {
        console.log('it')
    }
}

class AccountDepartment extends Department {
    private lastReport: string
    private static instance: AccountDepartment

    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport
        }
        throw new Error('No report found')
    }

    set mostRecentReport(value: string) {
        if (!value) {
            throw new Error('Please pass in valid value')
        }
        this.addReport(value)
    }

    private constructor(id: string, private reports: string[]) {
        super(id, 'Accounting')
        this.lastReport = reports[0]
    }

    static getInstance() {
        if (!AccountDepartment.instance) {
            this.instance = new AccountDepartment('d1', ['test 1', 'test 2'])
        }
        return this.instance
    }

    describe(this: Department): void {
        console.log('acc')
    }

    addEmployee(employee: string): void {
        if (employee === 'Max') {
            return
        }
        this.employees.push(employee)
    }

    addReport(report: string) {
        this.reports.push(report)
        this.lastReport = report
    }

    printReports() {
        console.log(this.reports)
    }
}

// const accounting = new ITDepartment('2', ['Max'])
// accounting.addEmployee('Max')
// accounting.addEmployee('Alice')
// // accounting.employees[2] = 'Err'
// accounting.describe()
// accounting.printEmployeeInfo()

// const accountingCopy = {
//     describe: accounting.describe,
// }
// accountingCopy.describe()

// const it = new ITDepartment('d2', ['Max'])
// it.addEmployee('Max')
// it.addEmployee('Alice')
// // it.employees[2] = 'Err'
// it.describe()
// it.printEmployeeInfo()

const ac = AccountDepartment.getInstance()
ac.addEmployee('Max')
ac.addEmployee('Alen')
ac.printEmployeeInfo()

console.log(ac.mostRecentReport)
