export { default as Navbar } from './Navbar';

export interface Label {
  title: string;
}

export interface Note {
  heading: string;
  text: string;
  id: string;
  archieved: boolean;
  trash: boolean;
  completed: boolean;
  labels: Label[];
}
