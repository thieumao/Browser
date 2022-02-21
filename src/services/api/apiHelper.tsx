import { call } from 'redux-saga/effects';
import * as api from './index';

export function* apiLogin(phone: string, password: string): any {
  return yield call(api.login, phone, password);
}
