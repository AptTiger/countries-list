import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { InitService } from 'src/services/init.service';
import { StyleService } from 'src/services/style.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isDataLoaded$: BehaviorSubject<boolean>;
  title = 'countries-list';

  constructor(private styleService: StyleService, private init: InitService) {
    this.isDataLoaded$ = styleService.isDataLoaded$;
  }
}
