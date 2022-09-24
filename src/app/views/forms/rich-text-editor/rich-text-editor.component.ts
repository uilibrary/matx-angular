import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rich-text-editor',
  templateUrl: './rich-text-editor.component.html',
  styleUrls: [
    './rich-text-editor.component.css'
  ]
})
export class RichTextEditorComponent implements OnInit {

  editorData = `<h1>Matx | Angular material admin</h1>
  <p><a href="http://devmatx.com" target="_blank"><strong>DevMatx</strong></a></p>
  <p><br></p><p><strong >Lorem Ipsum</strong>
  <span>&nbsp;is simply dummy text of the printing and typesetting industry. 
  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a 
  galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</span></p>`;

  constructor() { }

  ngOnInit() {
  }

  onContentChanged() { }
  onSelectionChanged() { }
}
