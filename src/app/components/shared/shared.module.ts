import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

import { ReactiveFormsModule } from '@angular/forms';
import { IconModule } from '../../directives/icon.module';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    IconModule,
  ],
  declarations: [
  ],
  exports: [
    MatButtonModule,
  ],
})
export class SharedModule {}
