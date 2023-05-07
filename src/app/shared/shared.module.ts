import { NgModule } from '@angular/core';

const COMPONENTS: any[] = [
];

const DIRECTIVES: any[] = [
];

const ANGULAR_MATERIAL_MODULES: any[] = [
];

@NgModule({
  imports: [
    ...ANGULAR_MATERIAL_MODULES,
  ],
  declarations: [
    ...COMPONENTS,
    ...DIRECTIVES,
  ],
  exports: [
    ...COMPONENTS,
    ...DIRECTIVES,
    ...ANGULAR_MATERIAL_MODULES
  ],
  providers: [
  ]
})
export class SharedModule { }