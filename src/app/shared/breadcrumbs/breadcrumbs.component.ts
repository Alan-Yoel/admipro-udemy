
import { Component } from '@angular/core';
import { Meta, MetaDefinition, Title } from '@angular/platform-browser';
import { ActivationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: []
})
export class BreadcrumbsComponent {

  titulo: string| any

  constructor(private router: Router,
              private tittle: Title,
              private meta: Meta) {
  
    this.getDataRoute()
    .subscribe((data: any) => {

      console.log(data);
      
      this.titulo = data.titulo;
      this.tittle.setTitle(this.titulo);

      const metaTag: MetaDefinition = {
        name: "description",
        content: this.titulo,
      };

      this.meta.updateTag(metaTag)
    });
  }
  
  getDataRoute() {
    return this.router.events.pipe(

      filter(event => event instanceof ActivationEnd),
      filter((event: any) => event.snapshot.firstChild === null),
      map((event: any) => event.snapshot.data)
    );
  }
}




