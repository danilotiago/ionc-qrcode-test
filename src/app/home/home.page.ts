import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public scannedCode: any = '';

  constructor(private barcodeScanner: BarcodeScanner) { }

  scanCode() {
    this.barcodeScanner.scan().then(data => {
      alert(data.text);
      this.scannedCode = data.text;
    })
    .catch(err => alert(err));
  }
}
