import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent implements OnInit {

  constructor() { }

  name=""
  college=""
  pname=""
  dob=""
  address=""
  number=""
  parentnum=""
  email=""
  blood=""

  readValues=()=>{
    let data={
     "name":this.name,
     "college":this.college,
      "pname":this.pname,
     "dob":this.dob,
      "address":this.address,
      "number":this.number,
      "parentnum":this.parentnum,
      "email":this.email,
      "blood":this.blood,
    }
    console.log(data)
  }




  ngOnInit(): void {
  }

}
