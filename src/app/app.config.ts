import { ApplicationConfig, importProvidersFrom } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(ReactiveFormsModule, FormlyModule.forRoot(), FormlyMaterialModule),
    provideAnimationsAsync()
  ]
};
