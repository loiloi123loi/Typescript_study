// autobind decorator
function autobind(_: any, _2: string, descriptor: PropertyDescriptor) {
    const oriMethod = descriptor.value
    const adjDescriptor: PropertyDescriptor = {
        configurable: true,
        get() {
            const boundFn = oriMethod.bind(this)
            return boundFn
        },
    }
    return adjDescriptor
}

// PrjInput
class ProjectInput {
    templateElement: HTMLTemplateElement
    hostElement: HTMLDivElement
    element: HTMLFormElement
    titleInputElement: HTMLInputElement
    descriptionInputElement: HTMLTextAreaElement
    peopleInputElement: HTMLInputElement

    constructor() {
        this.templateElement = document.getElementById(
            'project-input'
        )! as HTMLTemplateElement
        this.hostElement = document.getElementById('app')! as HTMLDivElement

        const importedNode = document.importNode(
            this.templateElement.content,
            true
        )
        this.element = importedNode.firstElementChild as HTMLFormElement
        this.element.id = 'user-input'

        this.titleInputElement = this.element.querySelector(
            '#title'
        ) as HTMLInputElement
        this.descriptionInputElement = this.element.querySelector(
            '#description'
        ) as HTMLTextAreaElement
        this.peopleInputElement = this.element.querySelector(
            '#people'
        ) as HTMLInputElement
        this.configure()
        this.attach()
    }

    @autobind
    private submitHandler(event: Event) {
        event.preventDefault()
        console.log(this.titleInputElement.value)
    }

    private configure() {
        this.element.addEventListener('submit', this.submitHandler.bind(this))
    }

    private attach() {
        this.hostElement.insertAdjacentElement('beforebegin', this.element)
    }
}

const prjInput = new ProjectInput()
