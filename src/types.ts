

export enum CheerType {
  ASPIRE = 'ASPIRE',
  BRAVE = 'BRAVE',
  CHAMPION = 'CHAMPION',
}

export type Cheer = {
  receiver: string;
  cheerType: CheerType;
  cheerContent: string;
  optionalName: string;
}