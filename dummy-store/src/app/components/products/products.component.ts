import { Component, OnInit,signal } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-products',
  imports: [RouterModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {
  products = signal<any[]>([]);
  isLoading = signal(true);

  constructor(private api : ApiService) { }

  ngOnInit() {
    this.api.getProducts().subscribe((res:any)=>{
      this.products.set(res.products);
      this.isLoading.set(false);
    })
  }
}
