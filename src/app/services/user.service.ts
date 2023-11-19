import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

export interface UsersState {
  users: User[];
  error: string | null;
  loading: boolean;
}

export const initialState: UsersState = {
  users: [],
  error: null,
  loading: false,
};

export interface User {
  name: {
    title: string;
    first: string;
    last: string;
  };
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
}

@Injectable({ providedIn: "root" })
export class UserService {
  // BehaviorSubject per gestire lo stato degli utenti
  private state = new BehaviorSubject<UsersState>(initialState);
  // Observable che fornisce accesso allo stato
  state$ = this.state.asObservable();

  constructor(private http: HttpClient) {}

  loadUsers() {
    this.state.next({ ...initialState, loading: true });

    this.http
      .get<UserResponse>("https://randomuser.me/api/?results=3")
      .subscribe({
        next: ({results}) => {
          console.log(results);
          this.state.next({ ...initialState, users: results });
        },
        error: (error) => this.state.next({ ...initialState, error }),
      });
  }
}

export interface UserResponse {
  results: User[];
  info: any;
}


