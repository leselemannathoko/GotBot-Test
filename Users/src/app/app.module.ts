import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { SaveService } from './save.service';


@NgModule({
   declarations: [
      AppComponent,
      RegisterComponent
   ],
   imports: [
      BrowserModule,
      FormsModule,
      HttpClientModule
   ],
   providers: [SaveService],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
