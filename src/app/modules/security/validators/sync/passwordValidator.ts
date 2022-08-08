import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
export class passwordValidator {
    static MatchValidator(source: string, target: string): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
            return control.get(source) &&
                control.get(target) &&
                control.get(source)?.value !== control.get(target)?.value
                ? { match: true }
                : null;
        };
    }
}