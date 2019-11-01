import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NameEditorComponent } from './name-editor/name-editor.component';
import { ChildTwoComponent } from './child-two/child-two.component';
import { SharedService } from './shared/shared.service';


@NgModule({
  declarations: [
    AppComponent,
    NameEditorComponent,
    ChildTwoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    SharedService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
