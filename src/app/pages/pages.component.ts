import { Component } from '@angular/core';


declare function init_plugins(): any;
@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
})
export class PagesComponent {
  constructor(){
    init_plugins();
  }
  ngOnInit(){

  }
}
