import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularBai6';
  products: Product[] = [];
  
  addNewProduct(maSP: string, tenSP: string, gia: any) {
    let product: Product = {maSP, tenSP, gia};
    this.products.push(product);
  }

}

interface Product {
  maSP: string;
  tenSP: string;
  gia: number;
}

