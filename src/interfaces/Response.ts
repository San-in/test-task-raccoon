import { IUser } from './User';

export interface IResponse {
  links: {
    next_url: string | null;
    prev_url: string | null;
  };
  users: IUser[];
}
