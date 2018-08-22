export interface DynamicComponent {
  data: DynamicComponentData;
}

export interface DynamicComponentData {
  type: string;
  content: any;
}
