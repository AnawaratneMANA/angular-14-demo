import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { HelloWorldTemplateComponent } from './hello-world-template.component';
import { HelloWorldNgIfComponent } from './hello-world-ngif/hello-world-ngif.component';
import { HelloWorldDependencyInjectionComponent } from './hello-world-di/hello-world-di.component';
import { HelloWorldInterpolationComponent } from './hello-world-interpolation/hello-world-interpolation.component';
import { HelloWorldBindingsComponent } from './hello-world-bindings/hello-world-bindings.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { ErrorComponent } from './component/error/error.component';
import { DataBindingComponent } from './component/data-binding/data-binding.component';
import { DirectivesComponent } from './component/directives/directives.component';
import { ProductHomeComponent } from './component/product/product-home/product-home.component';
import { ProductSearchComponent } from './component/product/product-search/product-search.component';
import { ProductDisplayComponent } from './component/product/product-display/product-display.component';
import { ProductInsertComponent } from './component/product/product-insert/product-insert.component';


const appRoute: Routes = [
  {path: "", component: HomeComponent},
  {path: 'todo-app', component: DashboardComponent},
  {path: 'data-binding', component: DataBindingComponent},
  {path: 'directives', component: DirectivesComponent},
  {path: 'product', component: ProductHomeComponent},
  {path: '**', component: ErrorComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    HelloWorldTemplateComponent,
    HelloWorldNgIfComponent,
    HelloWorldDependencyInjectionComponent,
    HelloWorldInterpolationComponent,
    HelloWorldBindingsComponent,
    DashboardComponent,
    HomeComponent,
    ErrorComponent,
    DataBindingComponent,
    DirectivesComponent,
    ProductHomeComponent,
    ProductSearchComponent,
    ProductDisplayComponent,
    ProductInsertComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
