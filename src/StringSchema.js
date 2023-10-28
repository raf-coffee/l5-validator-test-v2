export default class StringSchema {
    constructor(validators = [(value) => typeof value === 'string']) {
        this.validators = validators
    }

    isValid = (value) => this.validators.every(validator => validator(value))
}