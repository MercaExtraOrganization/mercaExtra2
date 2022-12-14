import { NgModule } from '@angular/core';
import { SharedModule } from 'app/shared/shared.module';
import { FacturaComponent } from './list/factura.component';
import { FacturaDetailComponent } from './detail/factura-detail.component';
import { FacturaUpdateComponent } from './update/factura-update.component';
import { FacturaDeleteDialogComponent } from './delete/factura-delete-dialog.component';
import { FacturaRoutingModule } from './route/factura-routing.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatCardHarness } from '@angular/material/card/testing';

@NgModule({
  imports: [SharedModule, FacturaRoutingModule, NgxPaginationModule, MatIconModule, MatCardModule],
  declarations: [FacturaComponent, FacturaDetailComponent, FacturaUpdateComponent, FacturaDeleteDialogComponent],
  entryComponents: [FacturaDeleteDialogComponent, MatCardHarness],
})
export class FacturaModule {}
