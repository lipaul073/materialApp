import { MaterialCourseComponent } from './module/material-course/material-course.component';
import { MaterialCourseRoutingModule } from './module/material-course/material-course-routing.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from './module/material/material.module';

const routes: Routes = [
  {path:'',component:MaterialCourseComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes),
            MaterialCourseRoutingModule,
            MaterialModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
