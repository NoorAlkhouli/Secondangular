import { Component, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';

import {
  IonApp,
  IonRouterOutlet,
  IonButton,
  NavController,
  IonIcon,
  IonTitle,
  IonButtons,
  IonToolbar,
  IonHeader,
  IonContent,
  IonMenu, IonFooter, IonTabButton, IonTabBar, IonTabs, IonBadge, IonMenuButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [
    IonBadge,
    IonTabs,
    IonTabBar,
    IonTabButton,
    IonFooter,
    IonContent,
    IonHeader,
    IonToolbar,
    IonButtons,
    IonTitle,
    IonIcon,
    IonButton,
    IonApp,
    IonRouterOutlet,
    IonMenu,
    RouterLink,
    IonMenuButton,
  ],
})
export class AppComponent {
  constructor() {}

  // constructor(public navCtrl: NavController) {}

  // gotoHomePage() {
  //   this.navCtrl.navigateForward('home');
  // }
}
