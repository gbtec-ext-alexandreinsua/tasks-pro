import { ApplicationConfig, importProvidersFrom } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';

export function minLengthValidationMessage(error: unknown, field: FormlyFieldConfig) {
  return `Should have at least "${field?.props?.minLength}" characters`;
}

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(
      ReactiveFormsModule,
      FormlyModule.forRoot({
        validationMessages: [{ name: 'minLength', message: minLengthValidationMessage }]
      }),
      FormlyMaterialModule
    ),
    provideAnimationsAsync()
  ]
};
