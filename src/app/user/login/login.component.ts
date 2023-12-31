import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm!: FormGroup;
  email = new FormControl('', [Validators.required, Validators.email]);
  hide = true;
  userData: any;
  submitted = false;
  errorMessage=null;

  constructor(private fb: FormBuilder, private auth: AuthService, private route: Router, private toastr:ToastrService) { }
  ngOnInit() {
    this.loginForm = this.fb.group({
      owner_name: ['', Validators.required],
      vehicle_no: ['', Validators.required],
      role: ['']
    })
  }
  get f(){
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted=true;
    if(this.loginForm.valid){
        this.auth.getUser().subscribe(
      (result: any) => {
        const user: any = result.find((a: any) => {
          return a.name == this.loginForm.value.owner_name && a.vehilceNo == this.loginForm.value.vehicle_no;
        });
        this.userData = user;
        console.log(this.userData);
        localStorage.setItem('username',this.loginForm.value.owner_name);
        if (user) {
          // alert('Login successful');
          this.toastr.success('Login successful');
          
          if (user.vehilceNo === '12345'&&user.name==='admin') {
            this.route.navigate(['/admin-home']);
          }
          else {
            this.route.navigate(['/track-vehicle']);
          }
        }
        else {
          this.toastr.error('You are not added as a user yet!');
        }
      },
      
          (error: any) => {
      // Handle error
      this.errorMessage=error.message;
      console.log(this.errorMessage);
          }
    )
    }

    }
    // this.auth.getUser().subscribe(
    //   (result: any) => {
    //     const user: any = result.find((a: any) => {
    //       return a.owner_name == this.loginForm.value.owner_name && a.vehicle_no == this.loginForm.value.vehicle_no;
    //     });
    //     this.userData = user;
    //     console.log(this.userData)
    //     if (user) {
    //       // alert('Login successful');
    //       this.toastr.success('Login successful');
          
    //       if (user.role == 'admin') {
    //         this.route.navigate(['/view-service']);
    //       }
    //       else if (user.role == 'customer') {
    //         this.route.navigate(['/track-vehicle']);
    //       }
    //     }
    //     else {
    //       this.toastr.error('user does not exist')
    //     }
    //   }
    // )
    // sessionStorage.setItem('username',this.loginForm.value.owner_name);
    // sessionStorage.setItem('password',this.loginForm.value.vehicle_no);
  }

