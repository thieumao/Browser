import axios, { AxiosRequestConfig } from 'axios';
import { responseInterceptor, errorInterceptor, requestInterceptor } from './interceptor';
import { AcceptType } from './type';
import { NativeModules, Platform } from 'react-native';

axios.defaults.baseURL = 'http://localhost:3000';
axios.defaults.timeout = 30 * 1000;
axios.interceptors.response.use(responseInterceptor, errorInterceptor);
axios.interceptors.request.use(requestInterceptor, errorInterceptor);

const defaultHeader = {
  Accept: AcceptType.json,
  'Content-Type': AcceptType.json,
};

const formHeader = {
  Accept: AcceptType.formData,
  'Content-Type': AcceptType.formData,
};

const urlEncodeHeader = {
  Accept: AcceptType.formData,
  'Content-Type': AcceptType.urlEncode,
};

class apiClient {
  config: AxiosRequestConfig;
  headers: any;

  constructor(token?: string) {
    const deviceLanguage = Platform.OS === 'ios'
      ? NativeModules.SettingsManager.settings.AppleLocale 
        || NativeModules.SettingsManager.settings.AppleLanguages[0] // iOS 13
      : NativeModules.I18nManager.localeIdentifier;
    const localeCode = deviceLanguage.includes('en') ? 'en' : 'vi';
    const localeHeader = { locale: localeCode };

    // NOTE: Set API Version = 2
    const versionHeader = { version: 1 };

    const authHeader = token && token.length > 0 ? { Authorization: 'Bearer ' + token } : null;

    this.config = {
      validateStatus: () => true,
    };
    this.headers = {
      ...defaultHeader,
      ...localeHeader,
      ...versionHeader,
      ...authHeader,
    };
  }

  get = (url: string, body?: any, option?: any) => {
    option = option || {};
    const { headers, ...rest } = option;
    return axios.get(url, {
      ...this.config,
      params: {
        ...body,
      },
      headers: {
        ...this.headers,
        ...headers,
      },
      ...rest,
    });
  };

  post = (url: string, body?: any, option?: any) => {
    option = option || {};
    const { headers, ...rest } = option;

    return axios.post(url, body, {
      ...this.config,
      headers: {
        ...this.headers,
        ...headers,
      },
      ...rest,
    });
  };

  postForm = (url: string, body?: any, option?: any) => {
    option = option || {};
    const { headers, ...rest } = option;

    const result = axios.post(url, body, {
      ...this.config,
      headers: {
        ...this.headers,
        ...formHeader,
        ...headers,
      },
      ...rest,
    });
    return result;
  };

  postURLEncode = (url: string, body?: any, option?: any) => {
    option = option || {};
    const { headers, ...rest } = option;

    const result = axios.post(url, body, {
      ...this.config,
      headers: {
        ...this.headers,
        ...urlEncodeHeader,
        ...headers,
      },
      ...rest,
    });
    return result;
  };

  delete = (url: string, body?: any, option?: any) => {
    option = option || {};
    const { headers, ...rest } = option;
    return axios.delete(url, {
      ...this.config,
      headers: {
        ...this.headers,
        ...headers,
      },
      data: JSON.stringify(body),
      ...rest,
    });
  };

  put = (url: string, body?: any, option?: any) => {
    option = option || {};
    const { headers, ...rest } = option;

    return axios.put(url, body, {
      ...this.config,
      headers: {
        ...this.headers,
        ...headers,
      },
      ...rest,
    });
  };

  patch = (url: string, body?: any, option?: any) => {
    option = option || {};
    const { headers, ...rest } = option;

    return axios.patch(url, body, {
      ...this.config,
      headers: {
        ...this.headers,
        ...headers,
      },
      ...rest,
    });
  };
}

export default apiClient;
