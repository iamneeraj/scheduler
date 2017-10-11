import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { NewComponentComponent } from './new-component/new-component.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { TabviewComponent } from './tabview/tabview.component';
import { Tab2Component } from './tab2/tab2.component';
@NgModule({
  declarations: [
    AppComponent,
    NewComponentComponent,
    ServerComponent,
    ServersComponent,
    DropdownComponent,
    TabviewComponent,
    Tab2Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
