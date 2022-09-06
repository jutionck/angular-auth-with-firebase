## Angular Auth With Firebase

### Setup Account

1. Login to firebase console https://console.firebase.google.com
2. Click New Project `e.g`: `angular-auth`
3. Enable Recomandation
4. Finish.

### Setup Authentication

1. Click build menu on sidebar and choose Authentication
2. Click Sign-in Method and choose Email/Password
3. Enabled.
4. Finish

### Setup API Keys

1. Navigate to project overview
2. Click add Firebase to your web app
3. Save your firebaseConfig and put on yout env angular

### Setup Angular

1. Open your angular project
2. Add dependency `ng add @angular/fire` or `npm i firebase @angular/fire`
3. Register module in `app.module`

```ts
// Firebase
import { AngularFireModule } from "@angular/fire/compat";
import { environment } from "../environments/environment";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
```
