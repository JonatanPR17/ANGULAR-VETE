import { Routes } from '@angular/router';
import { HomeLayaoutComponent } from './user/home/home-layaout/home-layaout.component';
import { ProductsLayoutComponent } from './user/products/products-layout/products-layout.component';
import { ProductsDetailsComponent } from './user/products/products-details/products-details.component';
import { ServiceLayoutComponent } from './user/service/service-layout/service-layout.component';
import { ServiceDetailsComponent } from './user/service/service-details/service-details.component';

export const routes: Routes = [
    {path: '', component : HomeLayaoutComponent},
    {path: 'products', component : ProductsLayoutComponent},
    {path: 'products/:productId', component : ProductsDetailsComponent},
    {path: 'service', component : ServiceLayoutComponent},
    {path: 'service/:serviceId', component : ServiceDetailsComponent},
];
