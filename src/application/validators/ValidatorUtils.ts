import validator from 'validator';

export class ValidatorFieldUtils {
    static email(value: string) {
        if (!validator.isEmail(value)) {
            return `Поле є обовʼязковим`
        }
    }

    static required(value: any) {
        if (value === null || value === undefined || value === '') {
            return `Поле є обовʼязковим`;
        }
    }

    static maxLength(value: string, max: number) {
        if (value.length > max) {
            return `Максимальна довжина поля ${max}`
        }
    }
}
