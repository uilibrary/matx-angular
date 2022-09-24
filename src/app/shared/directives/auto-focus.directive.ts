import { Directive, ElementRef } from "@angular/core";

@Directive({
    selector: '[autoFocus]',
})
export class AutoFocusDirective {
    constructor(private el: ElementRef) {
    }
    
    public focus(): void {
        console.log(this.el.nativeElement.focus());
        (this.el.nativeElement as HTMLInputElement).focus();
    }
}