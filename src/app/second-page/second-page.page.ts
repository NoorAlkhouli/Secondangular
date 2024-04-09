import { Component, NgModule, OnInit, viewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgModel } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonIcon,
  IonApp,
  IonButtons,
  IonMenu,
  IonBadge,
  IonButton,
  IonMenuButton,
  IonCardHeader,
  IonCardTitle,
  IonCard,
  IonNavLink,
  IonBackButton,
  IonItem,
} from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { register } from 'swiper/element/bundle';

register();


@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.page.html',
  styleUrls: ['./second-page.page.scss'],
  standalone: true,
  imports: [
    IonBackButton,
    IonNavLink,
    IonCard,
    IonCardTitle,
    IonCardHeader,
    IonButton,
    IonBadge,
    IonButtons,
    IonApp,
    IonIcon,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonMenu,
    RouterLink,
    IonMenuButton,
    IonItem,
    CommonModule,
    HttpClientModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SecondPagePage implements OnInit {
  constructor() {}

  ngOnInit() {}
  content = viewChild(IonContent);
  component = SecondPagePage;

  scrollToBottom() {
    // Passing a duration to the method makes it so the scroll slowly
    // goes to the bottom instead of instantly
    this.content()?.scrollToBottom(500);
  }

  scrollToTop() {
    // Passing a duration to the method makes it so the scroll slowly
    // goes to the top instead of instantly
    this.content()?.scrollToTop(500);
  }

  onScrollStart(): void {
    console.log('Scroll Start');
  }

  onScrollEnd(): void {
    console.log('Scroll End');
  }
}
