import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';

import { DataStorageService } from '../../shared/data-storage.service';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',

})

export class HeaderComponent implements OnInit {

  constructor(private dataStorgeService: DataStorageService, private authService: AuthService) { }

  //val = this.authService.isAuthenticated();

  ngOnInit() { }

  onSaveData() {
    this.dataStorgeService.storeRecipes().subscribe((response: Response) => {
      console.log(response);
    });
  }

  onFetchData() {
    this.dataStorgeService.getRecipes();
  }

  onLogOut() {
    this.authService.onLogOut();
  }

}
