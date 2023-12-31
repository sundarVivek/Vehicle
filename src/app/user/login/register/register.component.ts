import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  regForm!:FormGroup;
  hide = true;
  userData:any;
  constructor(private fb:FormBuilder, private auth:AuthService, private route:Router, private toastr:ToastrService){}
  ngOnInit(){
    this.regForm=this.fb.group({
      Name:[''],
      VehilceNo:['']
    })
  }
  
  onSubmit(){
if(this.regForm.valid){
//   const options = {
//     method: 'POST',
//     headers: {
//         'Content-type': 'text/plain',
//     }, // or remove this headers section
// }
  // this.auth.postUser(this.regForm.value).subscribe((res:any)=>{
  //   this.toastr.success('registration successful');
  //   this.route.navigate(['/add-service']);
  // },
  // (error:any)=>{
  //   console.log(error);
  // }
  // )
  this.auth.postUser(this.regForm.value).subscribe(
    result=>{
      alert('registration successful');
   this.route.navigate(['/login']);
    }
  );
}
    
    
      }
    }
    
