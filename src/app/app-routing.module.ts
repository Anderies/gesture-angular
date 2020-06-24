import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GestureSliderComponent } from './gesture-slider/gesture-slider.component';



const routes: Routes = [

  {
    path: '',
    component: GestureSliderComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  
  exports: [RouterModule]
})
export class AppRoutingModule { }
