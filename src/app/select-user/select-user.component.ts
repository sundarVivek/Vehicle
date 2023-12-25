import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-select-user',
  templateUrl: './select-user.component.html',
  styleUrls: ['./select-user.component.scss']
})
export class SelectUserComponent {
  constructor(private route:Router){}
ngOnInit(){

}
goLogin(){
this.route.navigate(['/login']);
}
}
