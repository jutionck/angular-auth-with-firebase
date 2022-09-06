import { Injectable } from '@angular/core';
import { AsyncValidator, FormControl } from '@angular/forms';
import { map, catchError } from 'rxjs/operators'
import { of } from 'rxjs';
import { EnzoicService } from '../enzoic/enzoic.service';

@Injectable({
  providedIn: 'root'
})
export class CompromisedPasswordService implements AsyncValidator {
  constructor(private readonly enzoic: EnzoicService) { }

  validate = (control: any) => {
    return this.enzoic.checkPassword(control.value).pipe(
      map(() => {
        return { compromised: true }
      }),
      catchError((err) => {
        console.log(err);

        return of(null);
      })
    );
  }
}
