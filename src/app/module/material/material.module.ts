import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule} from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button'
import { MatButtonToggleModule} from '@angular/material/button-toggle';

const MaterialComponents = [
  MatButtonModule,
  MatSliderModule,
  MatToolbarModule,
  MatSelectModule,
  MatAutocompleteModule,
  BrowserAnimationsModule,
  MatButtonToggleModule,
]

@NgModule({
  declarations: [],
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }
