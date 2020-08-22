import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlertsComponent } from './alerts/alerts.component';
import { HttpClientModule } from '@angular/common/http';
import { GraphSectionComponent } from './graph-section/graph-section.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { GraphService } from './services/graph.service';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { AlertsService } from './services/alerts.service';

@NgModule({
  declarations: [
    AppComponent,
    AlertsComponent,
    GraphSectionComponent,
    SidebarComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgxEchartsModule
  ],
  providers: [ GraphService, AlertsService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
