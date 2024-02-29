import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { UiComponent } from '@my-org/ui';
import { UiBuildableComponent } from '@my-org/ui-buildable';
import { UiPublishableComponent } from '@my-org/ui-publishable';

@Component({
  standalone: true,
  imports: [
    NxWelcomeComponent,
    RouterModule,
    UiComponent,
    UiBuildableComponent,
    UiPublishableComponent,
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'app1';
}
