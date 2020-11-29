export interface BgColor {
  type: "bgColor";
  color: string;
}

export interface BgImage {
  type: "bgImage";
  url: string;
  sourceId?: string;
}

export interface Text {
  type: "text";
  text: string;
  color: string;
  fontSize?: string;
  x?: number;
  y?: number;
  w?: number;
  h?: number;
  rotate?: string;
}

export interface Image {
  type: "image";
  url: string;
  x?: number;
  y?: number;
  w: number;
  h: number;
  rotate?: string;
  sourceId?: string;
}

export type JsonData = BgColor | BgColor | Text | Image;

export default class CanvasDrag {
  static export(): Promise<string>;

  static initByArr(newArr: JsonData): void;

  static exportJson(): Promise<JsonData[]>;

  static changColor(color: string): void;

  static changeBgColor(color: string): void;

  static changeBgImage(newBgImg: string | BgImage): void;

  static clearCanvas(): void;

  static undo(): void;
}
