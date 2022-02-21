import { Platform, Dimensions } from 'react-native';

export const widthRadio = Dimensions.get('window').width / 375; // design width = 375
export const heightRadio = Dimensions.get('window').height / 812; // design height = 812

export const isIOS = Platform.OS === 'ios';

export const isIntegerNumber = (number: string) => /^[0-9]*$/.test(number);

export const isFloatNumber = (number: string) => /^\d+(\,\d{1,2})?$/.test(number);

export const isEmpty = (str?: string) => (!str || str.trim().length === 0);

export const isValidUrl = (url: string) => {
  var res = url.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
  return (res !== null)
};

export const checkSubString = (subStr: string, str: string) => {
  return str.toLowerCase().trim().indexOf(subStr.toLowerCase().trim()) >= 0
}
