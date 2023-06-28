export namespace TemplateRefModel {
  export const HEADER = 'header';
  export const CONTENT = 'content';
  export const FOOTER = 'footer';
}

export type Template =
  | typeof TemplateRefModel.HEADER
  | typeof TemplateRefModel.CONTENT
  | typeof TemplateRefModel.FOOTER;
