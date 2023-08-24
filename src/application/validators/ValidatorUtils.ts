import validator from 'validator';

export class ValidatorFieldUtils {
    static email(value: string) {
        if (!validator.isEmail(value)) {
            return {
                type: 'email',
                message: 'Incorrect email'
            };
        }
    }

    static required(value: any) {
        if (value === null || value === undefined || value === '') {
            return {
                type: 'required',
                message: `Field is required`
            }
        }
    }

    static maxLength(value: string, max: number) {
        if (value.length <= max) {
            return `Max length ${max}`
        }
    }

    static password(value: string) {
        if (!validator.isStrongPassword(value, {
            minLength: 8,
            minSymbols: 0
        })) {
            return {
                type: 'required',
                message: `Password must be strong`
            }
        }
    }
}
