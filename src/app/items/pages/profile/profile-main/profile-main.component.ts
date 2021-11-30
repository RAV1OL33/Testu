import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-main',
  templateUrl: './profile-main.component.html',
  styleUrls: ['./profile-main.component.sass']
})
export class ProfileMainComponent implements OnInit {
  CreatedEvents = [
    {name: 'FIRST TEST CREATED'}
  ];
  testuArrayu = [1,2]
  TestStringu = "TESTU TESTU"
  constructor() { }

  ngOnInit(): void {
  }

}
