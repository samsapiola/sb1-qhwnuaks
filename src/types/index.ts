export type TransformType = 
  | 'uppercase' 
  | 'lowercase' 
  | 'capitalize' 
  | 'reverse'
  | 'trim';

export interface TextStats {
  characters: number;
  words: number;
  lines: number;
}