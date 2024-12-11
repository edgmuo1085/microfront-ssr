import { Component } from '@angular/core';
import { PaymentComponent } from './components/payment/payment.component';

@Component({
  selector: 'app-root',
  imports: [PaymentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'mf-payment';
}
