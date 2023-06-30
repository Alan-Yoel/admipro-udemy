import { NgModule } from "@angular/core";

import { SharedModule } from "../shared/shared.module";

import { ProgressComponent } from "./progress/progress.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { Graficas1Component } from "./graficas1/graficas1.component";
import { PagesComponent } from "./pages.component";
import { PAGES_ROUTES } from "./pages.routes";


@NgModule({
    declarations:[
        ProgressComponent,
        DashboardComponent,
        Graficas1Component,
        PagesComponent
    ],
    exports:[
        ProgressComponent,
        DashboardComponent,
        Graficas1Component,
        PagesComponent

    ],
    imports:[
        SharedModule,
        PAGES_ROUTES
    ]
})

export class PagesModule {
    
}
    