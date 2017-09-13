import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { routing } from './content-bulk-log-app.routes';

import { AreaBlockerModule, KalturaUIModule, TooltipModule } from '@kaltura-ng/kaltura-ui';
import {
  ButtonModule,
  CalendarModule,
  CheckboxModule,
  DataTableModule,
  InputTextModule,
  MenuModule,
  PaginatorModule,
  SharedModule,
  TieredMenuModule
} from 'primeng/primeng';
import { KalturaCommonModule } from '@kaltura-ng/kaltura-common';
import { KalturaPrimeNgUIModule } from '@kaltura-ng/kaltura-primeng-ui';
import { AutoCompleteModule } from '@kaltura-ng/kaltura-primeng-ui/auto-complete';
import { TagsModule } from '@kaltura-ng/kaltura-ui/tags';
import { PopupWidgetModule } from '@kaltura-ng/kaltura-ui/popup-widget';
import { ContentBulkLogAppComponent } from './content-bulk-log-app.component';
import { BulkLogTableComponent } from './bulk-log-table/bulk-log-table.component';
import { BulkLogListComponent } from './bulk-log-list/bulk-log-list.component';
import { ContentSharedModule } from 'app-shared/content-shared/content-shared.module';
import { BulkLogStoreService } from './bulk-log-store/bulk-log-store.service';
import { BulkLogObjectTypePipe } from './pipes/bulk-log-object-type.pipe';
import { BulkLogStatusPipe } from './pipes/bulk-log-status.pipe';
import { BulkLogTypeIconPipe } from './pipes/bulk-log-type-icon.pipe';
import { BulkLogNotificationPipe } from './pipes/bulk-log-notification.pipe';

@NgModule({
  imports: [
    CommonModule,
    AreaBlockerModule,
    DataTableModule,
    KalturaCommonModule,
    KalturaUIModule,
    PaginatorModule,
    TooltipModule,
    ButtonModule,
    TieredMenuModule,
    CheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    PopupWidgetModule,
    CalendarModule,
    MenuModule,
    TagsModule,
    KalturaPrimeNgUIModule,
    AutoCompleteModule,
    SharedModule,
    RouterModule.forChild(routing),
    ContentSharedModule
  ],
  declarations: [
    ContentBulkLogAppComponent,
    BulkLogTableComponent,
    BulkLogListComponent,
    BulkLogObjectTypePipe,
    BulkLogStatusPipe,
    BulkLogTypeIconPipe,
    BulkLogNotificationPipe
  ],
  exports: [],
  providers: [BulkLogStoreService]
})
export class ContentBulkLogAppModule {
}