import { Component } from '@angular/core';


// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
 
// }

// took this out of next section
// // <create-account></create-account>

@Component({
  selector: 'app-login',
  template: `
    <signin></signin>
    `
})
export class LoginComponent {
  constructor() { console.clear(); }
}

// @Component({
//   selector: 'create-account',
//   template: `<h1>{{title}} </h1>
//    <google-signin></google-signin>`
// })
// export class CreateAccountComponent {
//   title     = "create account page";
//   constructor() { console.clear(); }
// }


@Component({
  selector: 'signin',
  template: `<h1>{{title}} </h1>
   <google-signin></google-signin>`
})
export class SignInComponent {
  title     = "signin page";
  constructor() { console.clear(); }
}
