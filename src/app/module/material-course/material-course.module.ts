import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialCourseRoutingModule } from './material-course-routing.module';
import { IndexComponent } from './view/index/index.component';
import { ShowComponent } from './view/show/show.component';
import { MaterialCourseComponent } from './material-course.component';
import { MaterialModule } from '../material/material.module';
import { TypographyComponent } from './component/typography/typography.component';
import { ButtonComponent } from './component/button/button.component';
import { ButtonToggleComponent } from './component/button-toggle/button-toggle.component';


@NgModule({
  declarations: [

    IndexComponent,
    ShowComponent,
    MaterialCourseComponent,
    TypographyComponent,
    ButtonComponent,
    ButtonToggleComponent
  ],
  imports: [
    MaterialModule,
    CommonModule,
    MaterialCourseRoutingModule
  ]
})
export class MaterialCourseModule { }
