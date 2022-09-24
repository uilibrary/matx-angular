import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, combineLatest } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'matx-example-viewer-template',
  templateUrl: './example-viewer-template.component.html',
  styleUrls: ['./example-viewer-template.component.scss']
})
export class MatxExampleViewerTemplateComponent implements OnInit, OnDestroy {
  private unsubscribeAll: Subject<any>;
  id: string;
  examples: any[];
  exampleComponents: any = {};
  title: string;
  componentDirPath: string;

  constructor(private route: ActivatedRoute) {
    this.unsubscribeAll = new Subject();
  }

  ngOnInit() {
    combineLatest(this.route.params, this.route.data)
    .pipe(takeUntil(this.unsubscribeAll))
    .subscribe(([params, data]) => {
      this.id = params['id'];
      this.examples = data.map[this.id];
      this.exampleComponents = data.components;
      this.componentDirPath = data.path;

      const title = this.id.replace('-', ' ');
      this.title = title.charAt(0).toUpperCase() + title.substring(1);
      // console.log(params, data);
    });
  }

  ngOnDestroy() {
    this.unsubscribeAll.next(1);
    this.unsubscribeAll.complete();
  }
}
