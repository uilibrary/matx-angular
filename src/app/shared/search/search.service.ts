import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class SearchService {
  public searchTerm: BehaviorSubject<string> = new BehaviorSubject<string>("");
  public searchTerm$: Observable<string> = this.searchTerm.asObservable();

  constructor() {}
}
