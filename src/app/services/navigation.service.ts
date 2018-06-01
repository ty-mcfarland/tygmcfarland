import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class NavigationService {

  constructor(
    private readonly router: Router
  ) { }

  public navigate(url: string) {
    this.router.navigateByUrl(url);
  }
}
