export interface ImageType {
  id: number;
  url: string;
}

export type NetworkStatusType = 'pending' | 'done' | 'error';

export interface ImageDataType {
  url: string;
  id: number;
  comments: CommentType[]; 
}

export interface CommentType {
  id: number;
  text: string;
  date: string;
}

export interface CommentPostDataType {
  name: string;
  comment: string;
}