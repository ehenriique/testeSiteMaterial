import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm, Validators } from '@angular/forms';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 hide= true;
 
  constructor() { }

  ngOnInit(): void {
  }

  logar(): void{
    
  }

  onSubmit(form:NgForm)
  {
  
    let dados= `
    Email: ${form.value.email};
    Senha: ${form.value.senha2} 
    `;
  
  
  
    console.log(dados)

  }
}
