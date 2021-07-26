import { NgModule } from '@angular/core';
import { AccordionModule } from 'ngx-bootstrap/accordion'
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { CarouselModule } from 'ngx-bootstrap/carousel';

//NgX BootStrap modules I use the termail  to install and manually added everything ... here is the added info 
//got help from this site http://www.mukeshkumar.net/articles/angular5/building-an-angular-5-cli-project-with-ngx-bootstrap
@NgModule({
    imports: [AccordionModule.forRoot(), 
      BsDropdownModule.forRoot(), 
      ModalModule.forRoot(), 
      TabsModule.forRoot(), 
      CarouselModule.forRoot()],
    exports: [AccordionModule, BsDropdownModule, ModalModule, TabsModule, CarouselModule],
    declarations: [],
    providers: []
})

export class SharedBootstrapModule {

}