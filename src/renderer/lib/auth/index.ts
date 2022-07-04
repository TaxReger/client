import axios from 'axios';
import settings from 'electron-settings';
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
  return (await settings.get('JWT_TOKENS')) as unknown;
};
export const setTokens = async (tokens: any) => {
  await settings.set('JWT_TOKENS', tokens);
};

export const getAccount = async () => {
  return (await settings.get('ACTIVE_ACCOUNT')) as unknown;
};
export const setAccount = async (account: any) => {
  await settings.set('ACTIVE_ACCOUNT', account);
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

  await setTokens({ refreshToken, accessToken });
  await setAccount(account);

  // TODO: Pass to Context Provider?
};
export const signIn = async (email: string, password: string) => {
  const response = await axios.post(`${API_URL}/auth/login`, {
    email,
    password,
  });

  await handleGenericAuthResponse(response.data);
};
