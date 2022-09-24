import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SearchInputOverComponent } from "./search-input-over/search-input-over.component";
import { ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { SharedDirectivesModule } from "../directives/shared-directives.module";

@NgModule({
  declarations: [SearchInputOverComponent],
  exports: [SearchInputOverComponent],
  imports: [ReactiveFormsModule, MatIconModule, MatButtonModule, CommonModule, SharedDirectivesModule]
})
export class SearchModule {}
