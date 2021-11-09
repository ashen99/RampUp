import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'rampup-fe';
  public gridData: any[] = [
    {
      Id: 1,
      Name: 'Ashen',
      Gender: 'Male',
      Address: 'pamankada',
      MobileNo: '0774578889',
      Dateofbirth: 'mon sep 16 1999',
      Age: '22',
    },
  ];

  ngOnInit(): void {}
}
