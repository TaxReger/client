import { useContext, createContext } from 'react';
import axios from 'axios';
import { API_URL } from '../constants';

export type Account = {
  id: number;
  dateCreated: Date;
  fuid: string;
  email: string;
  emailVerified: boolean;
  phoneVerified: boolean;
};
export type AuthResponse = {
  accessToken: string;
  refreshToken: string;
  account: Account;
};
/**
 * gets the JWT token stored
 * @returns A JWT String or null
 */
export const getTokens = async () => {
  const str = window.localStorage.getItem('JWT_TOKENS');

  if (str) {
    return JSON.parse(str);
  }
  return null;
};
export const setTokens = async (tokens: any) => {
  window.localStorage.setItem('JWT_TOKENS', JSON.stringify(tokens));
};

export const getAccount = () => {
  const str = window.localStorage.getItem('ACTIVE_ACCOUNT');

  if (str) {
    return JSON.parse(str) as Account;
  }
  return null;
};
export const setAccount = (account: any) => {
  window.localStorage.setItem('ACTIVE_ACCOUNT', JSON.stringify(account));
};

// Ref: https://stackoverflow.com/a/69058154
/**
 *
 * @param token JWT String
 * @returns A boolean indicating whether the token is expired or not
 */
export const isTokenExpired = (token: string) =>
  Date.now() >=
  JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString()).exp * 1000;

export const handleGenericAuthResponse = async (data: AuthResponse) => {
  const { refreshToken, accessToken, account } = data;
  setTokens({ refreshToken, accessToken });
  setAccount(account);
};
export const signIn = async (email: string, password: string) => {
  const response = await axios.post(`${API_URL}/auth/login`, {
    email,
    password,
  });

  await handleGenericAuthResponse(response.data);
};

export const signOut = () => {
  console.log('Done');
  window.localStorage.removeItem('JWT_TOKENS');
  window.localStorage.removeItem('ACTIVE_ACCOUNT');
};

/// Context Logic

type AuthContextProp = {
  account: Account | null;
  setAccount: (v: Account | null) => void;
};
export const AuthContext = createContext<AuthContextProp | undefined>(
  undefined
);

export function useAuthContext() {
  const context = useContext(AuthContext);

  if (context === undefined)
    throw new Error('Auth Context used outside provider');
  return context;
}
