import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule, MatMenuModule, MatMenu  } from '@angular/material';
import { MissionStatementComponent } from './mission-statement/mission-statement.component';
import { ContactComponent } from './contact/contact.component';
import { TransMenComponent } from './trans-men/trans-men.component';
import { TransWomenComponent } from './trans-women/trans-women.component';
import { NonBinaryComponent } from './non-binary/non-binary.component';
import { AllyComponent } from './ally/ally.component';
import { GlossaryComponent } from './glossary/glossary.component';
import { IrlSupportComponent } from './irl-support/irl-support.component';
import { OnlineSupportComponent } from './online-support/online-support.component';
import { LgbtqCompaniesComponent } from './lgbtq-companies/lgbtq-companies.component';
import { BathroomFinderComponent } from './bathroom-finder/bathroom-finder.component';
import { InformedProvidersComponent } from './informed-providers/informed-providers.component';
import { OtherProvidersComponent } from './other-providers/other-providers.component';
import { MentalHealthComponent } from './mental-health/mental-health.component';
import { PlasticSurgeonsComponent } from './plastic-surgeons/plastic-surgeons.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MissionStatementComponent,
    ContactComponent,
    TransMenComponent,
    TransWomenComponent,
    NonBinaryComponent,
    AllyComponent,
    GlossaryComponent,
    IrlSupportComponent,
    OnlineSupportComponent,
    LgbtqCompaniesComponent,
    BathroomFinderComponent,
    InformedProvidersComponent,
    OtherProvidersComponent,
    MentalHealthComponent,
    PlasticSurgeonsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
