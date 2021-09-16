export interface IResult {
  id: Number;
  adult: Boolean;
  backdrop_path: String;
  genre_id: Number;
  ic: Number;
  original_name: string;
  original_language: String;
  overview: String;
  popularity: String;
  poster_path: String;
  title: String;
  video: Boolean;
  vote_average: Number;
  vote_count: Number;
  media_type: String;
  release_date: Date;
  first_air_date: Date;
}

export default interface IResults {
  results: IResult[];
}
