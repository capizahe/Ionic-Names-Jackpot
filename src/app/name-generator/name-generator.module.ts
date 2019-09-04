import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NameGeneratorPage } from './name-generator.page';

const routes: Routes = [
  {
    path: '',
    component: NameGeneratorPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [NameGeneratorPage]
})
export class NameGeneratorPageModule {}
