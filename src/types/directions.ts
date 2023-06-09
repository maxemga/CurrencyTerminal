export interface Direction {
  code: string;
  name: string;
}

export interface Filter {
  from: Direction;
  to: Direction[];
}
