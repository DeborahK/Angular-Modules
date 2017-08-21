import { NgModule, ModuleWithProviders, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataService } from './data.service';
import { MessageService } from './message.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    DataService,
    MessageService
  ]
})
export class CoreModule {

  // Prevent reimport of this module
  constructor (@Optional() @SkipSelf() currentModule: CoreModule) {
    if (currentModule) {
      throw new Error(
        'CoreModule is already loaded. Add it to the Imports array of the AppModule only');
    }
  }
}
