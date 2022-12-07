import React, {useState, useEffect} from 'react';
import SInfo from 'react-native-sensitive-info';
import Auth0 from 'react-native-auth0';
import jwtDecode from 'jwt-decode';
import {Alert} from 'react-native';
import {setLoginInfo} from '../redux/slices/AuthSlice';
import {useAppDispatch} from '../redux/storage/Store';

const auth0 = new Auth0({
  domain: 'dev-i5u6y8fotlyau8mz.us.auth0.com',
  clientId: 'IcEtDEF4QvHgvOG9zMQsKg2UKVmVvl3Q',
});

const AuthContextProvider = (props: any) => {
  const dispatch = useAppDispatch();
  const [loading] = useState(true);
  const [loggedIn, setLoggedIn] = useState<boolean>();
  const [userData, setUserData] = useState<
    {name: string; email: string; picture: string; idToken: string} | undefined
  >();

  const getUserData = async (id?: string) => {
    const idToken = id ? id : await SInfo.getItem('idToken', {});
    const {name, email, picture, exp} = jwtDecode<any>(idToken);
    if (exp < Date.now() / 1000) {
      throw new Error('ID token expired!');
    }
    return {
      name,
      email,
      picture,
      idToken,
    };
  };

  useEffect(() => {
    (async () => {
      try {
        const user_data = await getUserData();
        if (user_data) {
          setLoggedIn(true);
          setUserData(user_data);
        }
      } catch (err) {
        setLoggedIn(false);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        if (loggedIn) {
          const user_data = await getUserData();
          if (user_data) {
            setLoggedIn(true);
            setUserData(user_data);
            dispatch(setLoginInfo(user_data));
          }
        }
      } catch (err) {
        Alert.alert('Error logging in');
      }
    })();
  }, [loggedIn]);

  const login = async () => {
    try {
      const credentials = await auth0.webAuth.authorize({
        scope: 'openid email profile',
      });
      await SInfo.setItem('idToken', credentials.idToken, {});
      // console.log('idToken', JSON.stringify(credentials.idToken, null, 2));
      const user_data = await getUserData(credentials.idToken);
      setLoggedIn(true);
      setUserData(user_data);
      dispatch(setLoginInfo(user_data));
    } catch (err) {
      Alert.alert('Error logging in');
    }
  };

  const logout = async () => {
    try {
      await auth0.webAuth.clearSession();
      await SInfo.deleteItem('idToken', {});
      setLoggedIn(false);
      setUserData(undefined);
      dispatch(setLoginInfo(undefined));
    } catch (err) {
      Alert.alert('Error logging in');
    }
  };

  const value = {
    loading,
    loggedIn,
    login,
    logout,
    userData,
  };

  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
};

const AuthContext = React.createContext<any>(null);

export {AuthContext, AuthContextProvider};
