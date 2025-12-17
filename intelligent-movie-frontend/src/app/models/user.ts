export interface UserSummary {
  id: number;
  username: string;
  email?: string;
  is_active?: boolean;
}

export interface UserProfile extends UserSummary {
  bio?: string;
}
export interface User {
}
