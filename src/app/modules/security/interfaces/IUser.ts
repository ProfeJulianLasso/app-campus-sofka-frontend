export interface User {
  uid: string | undefined;
  email: string | undefined | null;
  displayName: string | undefined | null;
  photoURL: string | undefined | null;
  emailVerified: boolean | undefined;
}
