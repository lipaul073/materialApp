import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { ButtonToggleComponent } from './component/button-toggle/button-toggle.component';
import { ButtonComponent } from './component/button/button.component';
import { TypographyComponent } from './component/typography/typography.component';
import { IndexComponent } from './view/index/index.component';
import { ShowComponent } from './view/show/show.component';

const routes: Routes = [
  {path:'show',component:ShowComponent},
  {path:'',component:IndexComponent},
  {path:'typography',component:TypographyComponent},
  {path:'button',component:ButtonComponent},
  {path:'button-toggle',component:ButtonToggleComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes),
    MaterialModule],
  exports: [RouterModule]
})
export class MaterialCourseRoutingModule { }
