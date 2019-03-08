import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { makeParamDecorator } from '@angular/core/src/util/decorators';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  @Input() public parametro: string;            //Para pasarle un parametro
  users$: Object;
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getUsers().subscribe(
      data => this.users$ = data
    );

  }

}
