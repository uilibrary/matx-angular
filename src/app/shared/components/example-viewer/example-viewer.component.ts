import { Component, OnInit, Input, ViewChild, ViewContainerRef, AfterViewInit, ComponentFactoryResolver, OnDestroy, ComponentRef } from "@angular/core";
// import { EXAMPLE_COMPONENTS } from "assets/examples/examples";

@Component({
  selector: "matx-example-viewer",
  templateUrl: "./example-viewer.component.html",
  styleUrls: ["./example-viewer.component.scss"]
})
export class MatxExampleViewerComponent implements OnInit, AfterViewInit, OnDestroy {

  private _exampleId: string;
  exampleViewRef: ComponentRef<any>;
  componentPath: string;

  // Component ID
  @Input("exampleId")
  set exampleId(exampleId: string) {
    if (exampleId) {
      this._exampleId = exampleId;
    } else {
      console.log("EXAMPLE ID MISSING");
    }
  }
  // Title and component Ref
  @Input('data') data: any;

  // Component Directory path
  @Input('path') path: any;

  get exampleId(): string {
    return this._exampleId;
  }

  @ViewChild('exampleContainer', { read: ViewContainerRef }) exampleContainer: ViewContainerRef

  constructor(
    private cfr: ComponentFactoryResolver
  ) { 

  }

  ngOnInit() {
    this.componentPath = this.path + this.exampleId + '/' + this.exampleId + '.component';
  }
  ngAfterViewInit() {
    if(!this.data) {
      console.log('EXAMPLE COMPONENT MISSING');
      return;
    }
    let componentFactory = this.cfr.resolveComponentFactory(this.data.component);
    this.exampleViewRef = this.exampleContainer.createComponent(componentFactory);
  }
  ngOnDestroy() {
    if(this.exampleViewRef) {
      this.exampleViewRef.destroy();
    }
  }


}
