import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
 
})
export class LoginPageComponent  implements OnInit{
 
  activeTab: string = 'tab1'; // Set the initial active tab to 'tab1'
  passwordVisible: boolean = false;
  hidePassword = true;
  showIcon = true;
 
constructor(){}

  ngOnInit(): void {
   
  }

  togglePasswordVisibility() {
    this.hidePassword = !this.hidePassword;
  }
  setActiveTab(tab: string): void {
    this.activeTab = tab;
  }

}
