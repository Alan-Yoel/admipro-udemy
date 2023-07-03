import { NgModule } from "@angular/core";

import { SharedModule } from "../shared/shared.module";

//ng2-charts
import { NgChartsModule } from 'ng2-charts';


import { ProgressComponent } from "./progress/progress.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { Graficas1Component } from "./graficas1/graficas1.component";
import { PagesComponent } from "./pages.component";
import { PAGES_ROUTES } from "./pages.routes";
import { FormsModule } from "@angular/forms";

//temporal
import { IncrementadorComponent } from "../componets/incrementador/incrementador.component";
import { GraficoDonaComponent } from "../componets/grafico-dona/grafico-dona.component";
import { AccoutSettingsComponent } from './accout-settings/accout-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import RxjsComponent from './rxjs/rxjs.component';






@NgModule({
    declarations:[
        ProgressComponent,
        DashboardComponent,
        Graficas1Component,
        PagesComponent,
        IncrementadorComponent,
        GraficoDonaComponent,
        AccoutSettingsComponent,
        PromesasComponent,
        RxjsComponent,
        
     
        
    ],
    exports:[
        ProgressComponent,
        DashboardComponent,
        Graficas1Component,
        PagesComponent,
        
        
        

    ],
    imports:[
        SharedModule,
        PAGES_ROUTES,
        FormsModule,
        NgChartsModule,
      
        
    ]
})

export class PagesModule {
    
}
    
