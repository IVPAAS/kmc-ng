import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AreaBlockerModule } from '@kaltura-ng/kaltura-ui';
import {
  DataTableModule,
  ButtonModule,
  InputTextModule,
  MenuModule,
  SharedModule,
  DropdownModule
} from 'primeng/primeng';
import { KalturaCommonModule } from '@kaltura-ng/kaltura-common';
import { KalturaPrimeNgUIModule } from '@kaltura-ng/kaltura-primeng-ui';
import { KalturaUIModule, TooltipModule } from '@kaltura-ng/kaltura-ui';
import { PopupWidgetModule } from '@kaltura-ng/kaltura-ui/popup-widget';

import { UploadMenuComponent } from './upload-menu/upload-menu.component';
import { UploadSettingsComponent } from './upload-settings/upload-settings.component';
import { UploadButtonComponent } from './upload-button/upload-button.component';
import { BulkUploadMenuComponent } from './bulk-upload-menu/bulk-upload-menu.component';

@NgModule({
  imports: [
    CommonModule,
    AreaBlockerModule,
    DataTableModule,
    KalturaCommonModule,
    KalturaUIModule,
    TooltipModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    DropdownModule,
    PopupWidgetModule,
    MenuModule,
    KalturaPrimeNgUIModule,
    SharedModule
  ],
  declarations: [
    UploadMenuComponent,
    UploadSettingsComponent,
    UploadButtonComponent,
    BulkUploadMenuComponent
  ],
  exports: [
    UploadButtonComponent
  ]
})
export class KmcUploadAppModule {
}