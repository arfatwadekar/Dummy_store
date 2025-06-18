import { Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { LoginComponent } from './components/login/login.component';
import { CartComponent } from './components/cart/cart.component';

export const routes: Routes = [
    { path: '', component: ProductsComponent },
    { path: 'product/:id', component: ProductDetailComponent },
    { path: 'login', component: LoginComponent },
    { path: 'cart', component: CartComponent },
    { path: '**', redirectTo: '' } // fallback
      
];
