export interface Heroe {
  nombre: string;
  casa: string;
  bio: string;
}

export interface HeroeId {
  id: string;
  heroe: Heroe;
}
