import { Component, OnInit } from '@angular/core';



interface Componente {
  icon : string;
  name: string;
  redirectTo: string;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes : Componente[] = [
    
    {
      icon: 'library-outline',
      name:'Post',
      redirectTo: '/post'
    },{
      icon: 'american-football-outline',
      name:'Action Sheet',
      redirectTo: '/action-sheet'
    },
    {
      icon:'logo-apple-appstore',
      name:'Alert',
      redirectTo: '/alert'
    },
    {
      icon:'beaker-outline',
      name:'Avatar',
      redirectTo: '/avatar'
    },
    {
      icon:'radio-button-off-outline',
      name:'Button',
      redirectTo: '/button'
    },
    {
      icon:'card-outline',
      name:'Card',
      redirectTo: '/card'
    },
      {
      icon:'checkmark-circle-outline',
      name:'Check',
      redirectTo: '/check'
    },
    {
      icon:'calendar-outline',
      name:'DateTime',
      redirectTo: '/date-time'
    },
    {
      icon:'car-outline',
      name:'Fab',
      redirectTo: '/fab'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
