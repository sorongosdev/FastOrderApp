import AsyncStorage from '@react-native-async-storage/async-storage';

export const setReception = async (key: string, value: string) => {
    try {
      await AsyncStorage.setItem(key, value);
      console.log(`setItem... ${key} : ${value}`);
    } catch (e) {
      throw e;
    }
  };
  
  export const getReception = async (key: string) => {
    try {
      const res = await AsyncStorage.getItem(key);
      return res || '';
    } catch (e) {
      throw e;
    }
  };