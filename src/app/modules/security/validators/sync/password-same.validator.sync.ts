import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export class PasswordSame {
    static check: ValidatorFn = (group: AbstractControl): ValidationErrors | null => {
        const pass = group.get('password')?.value;
        const confirmPass = group.get('confirmPassword')?.value
        return pass === confirmPass ? null : { notSame: true }
    }
}