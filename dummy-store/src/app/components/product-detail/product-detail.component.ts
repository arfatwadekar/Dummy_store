import { Component,OnInit,signal } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  imports: [CommonModule,RouterModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent implements OnInit {

  product = signal<any>(null); // ✅ Correct: single object
  isLoading = signal(true);


  constructor(private api : ApiService,private route: ActivatedRoute,){}

  ngOnInit(){
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.api.getProductById(id).subscribe((res) => {
      this.product.set(res);
      this.isLoading.set(false);
    });
  }

}
