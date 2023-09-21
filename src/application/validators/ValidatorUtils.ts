import validator from 'validator';

export class ValidatorFieldUtils {
    static email(value: string) {
        if (!validator.isEmail(value)) {
            return {
                type: 'email',
                message: 'Некоректний email'
            };
        }
    }

    static required(value: any) {
        if (value === null || value === undefined || value === '') {
            return {
                type: 'required',
                message: `Поле є обовʼязковим`
            }
        }
    }

    static maxLength(value: string, max: number) {
        if (value.length > max) {
            return `Максимальна довжина поля ${max}`
        }
    }
}
