import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatButtonModule, MatCheckboxModule, MatSidenavModule, MatTabsModule, MatToolbarModule, MatIconModule, MatListModule, MatMenuModule } from '@angular/material';
import { HeaderComponent } from './shared/components/navigation/header/header.component';
import { LayoutComponent } from './shared/components/layout/layout.component';
import { SidenavListComponent } from './shared/components/navigation/sidenav-list/sidenav-list.component';
import { MostRecentRowComponent } from './shared/components/most-recent-row/most-recent-row.component';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LayoutComponent,
    SidenavListComponent,
    MostRecentRowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatCardModule
  ],
  providers: [],
  exports: [
    MatTabsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatMenuModule,
    MostRecentRowComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
