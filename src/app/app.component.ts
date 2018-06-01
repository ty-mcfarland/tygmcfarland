import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppService } from './services/app.service';
import { AppSection } from './interfaces/app.section.interface';
import { Subscription } from 'rxjs/Subscription';
import { NavigationService } from './services/navigation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  getSections$: Subscription = new Subscription();
  resumeSections: Array<AppSection>;

  subscriptions$: Subscription = new Subscription();
  constructor(
    private readonly appService: AppService,
    private navService: NavigationService
  ) {
    this.getSections$ = this.appService.getSections()
      .subscribe((data: any) => {
        this.resumeSections = data.resume_sections;
        console.log(data)
      });
    
    this.subscriptions$.add(this.getSections$);
  }

  ngOnDestroy() {
    this.subscriptions$.unsubscribe();
  }

  ngOnInit() {

  }
  
  public routeTo(url: string) {
    console.log(url);
    this.navService.navigate(url);
  }
}
