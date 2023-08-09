import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'passwordPipe'
})
export class PasswordPipePipe implements PipeTransform {

  transform(value: string): string {
    return '*'.repeat(value.length);
  }
}
