export interface EventData {
  id: number;
  title: string;
  date: string;
  location: string;
  description: string;
}
export interface EventsData {
  results: EventData[];
}
