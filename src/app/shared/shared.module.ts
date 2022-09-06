import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValidationMessageComponent } from './components/validation-message/validation-message.component';
import { CompromisedPasswordService } from './services/compromised-password/compromised-password.service';
import { MatchService } from './services/match/match.service';
import { StringUtil } from './utils/string.uti.';



@NgModule({
  declarations: [
    ValidationMessageComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    CompromisedPasswordService,
    MatchService,
    StringUtil
  ],
  exports: [
    ValidationMessageComponent
  ]
})
export class SharedModule { }
