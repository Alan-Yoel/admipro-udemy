import { NgModule } from "@angular/core";


import { HeaderComponent } from "./header/header.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { BreadcrumbsComponent } from "./breadcrumbs/breadcrumbs.component";
import { NopagesfoundComponent } from "./nopagesfound/nopagesfound.component";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";


@NgModule({
    imports:[
        RouterModule,
        CommonModule
    ], 
    declarations:[
        HeaderComponent,
        SidebarComponent,
        BreadcrumbsComponent,
        NopagesfoundComponent
    ],
    exports:[
        HeaderComponent,
        SidebarComponent,
        BreadcrumbsComponent,
        NopagesfoundComponent
    ]
    
})

export class SharedModule{

}