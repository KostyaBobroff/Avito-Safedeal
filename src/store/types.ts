export interface Image {
  id: number;
  url: string;
}

export type NetworkStatus = 'pending' | 'done' | 'error';

export interface ImageData {
  url: string;
  id: number;
  comments: Comment[]; 
}

export interface Comment {
  id: number;
  text: string;
  date: string;
}

export interface CommentData {
  name: string;
  comment: string;
}