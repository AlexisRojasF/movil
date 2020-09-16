import { Component, OnInit } from '@angular/core';
import { GetUrlService } from 'src/app/services/get-url.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.page.html',
  styleUrls: ['./post.page.scss'],
})
export class PostPage implements OnInit {

  mensajes: any;

  constructor( private _getUrl:GetUrlService ) { }

  ngOnInit() {

    this._getUrl.getPosts().subscribe(
      (res: any) => {
        this.mensajes = res.agenda;

        console.log(this.mensajes);


      });
  }

}
