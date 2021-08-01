import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'src/app/faculty/message.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  gridColumns = 3;
  
  panelOpenState = false;
  constructor(private messageService:MessageService, private router:Router) { }

  message=[{
    username:'',
    email:'',
    date:'',
    subject:'',
    message:'', 
    expanded: false
  }];
  toggle(expanded: boolean) {
    expanded = !expanded;
  }

  ngOnInit(): void{
    this.messageService.getMessages().subscribe((data)=>{
      this.message=JSON.parse(JSON.stringify(data));
  })
  }

}
