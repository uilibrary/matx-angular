import { Routes } from '@angular/router';

import { BasicFormComponent } from './basic-form/basic-form.component';
import { RichTextEditorComponent } from './rich-text-editor/rich-text-editor.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { WizardComponent } from './wizard/wizard.component';

export const FormsRoutes: Routes = [
  {
    path: '',
    children: [{
      path: 'basic',
      component: BasicFormComponent,
      data: { title: 'Basic', breadcrumb: 'Basic' }
    }, {
      path: 'editor',
      component: RichTextEditorComponent,
      data: { title: 'Editor', breadcrumb: 'Editor' }
    }, {
      path: 'upload',
      component: FileUploadComponent,
      data: { title: 'Upload', breadcrumb: 'Upload' }
    }, {
      path: 'wizard',
      component: WizardComponent,
      data: { title: 'Wizard', breadcrumb: 'Wizard' }
    }]
  }
];