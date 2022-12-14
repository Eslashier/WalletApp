import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {styles} from '../theme/ThemesStyle';
import {ThemeButton} from '../components/ThemeButton/ThemeButton';
import {ColorButtonSmaller} from '../components/ColorButton/ColorButton';
import images from '../assets/themes/images';
import {useSelector} from 'react-redux';
import {selectClientState} from '../redux/slices/ClientSlice';
import {appChangeThemeType, updateTheme} from '../services/App/changeTheme';
import {selectUserEmail} from '../redux/slices/AuthSlice';
import {useAppDispatch} from '../redux/storage/Store';

interface Props {
  action: () => void;
}

export const ThemeSelector = ({action}: Props) => {
  const dispatch = useAppDispatch();
  const themeState = useSelector(selectClientState());
  const userData = useSelector(selectUserEmail());
  const [theme, setTheme] = useState(themeState.app.color);

  const themeSelector = () => {
    const themeObject = {
      color: theme,
    };
    const changeTheme: appChangeThemeType = {
      appId: themeState.app.id,
      color: themeObject,
      idToken: userData?.idToken,
    };
    dispatch(updateTheme(changeTheme));
    action();
  };

  return (
    <>
      <View style={styles.buttons}>
        <Text style={styles.content}>Choose your theme</Text>
        <Text style={styles.subText}>You can change the theme anytime</Text>
        <View style={styles.containerRow}>
          <ThemeButton
            text={'Arts & Culture'}
            img={images[1]}
            setState={setTheme}
            theme={'arts'}
            state={theme}
          />
          <ThemeButton
            text={'Food & Drinks'}
            img={images[2]}
            setState={setTheme}
            theme={'food'}
            state={theme}
          />
          <ThemeButton
            text={'Gaming'}
            img={images[3]}
            setState={setTheme}
            theme={'default'}
            state={theme}
          />
        </View>
        <View style={styles.containerRow}>
          <ThemeButton
            text={'Music'}
            img={images[4]}
            setState={setTheme}
            theme={'music'}
            state={theme}
          />
          <ThemeButton
            text={'Nature'}
            img={images[5]}
            setState={setTheme}
            theme={'nature'}
            state={theme}
          />
          <ThemeButton
            text={'Activity'}
            img={images[6]}
            setState={setTheme}
            theme={'activity'}
            state={theme}
          />
        </View>
        <View style={styles.containerRow}>
          <ThemeButton
            text={'Fashion'}
            img={images[7]}
            setState={setTheme}
            theme={'fashion'}
            state={theme}
          />
          <ThemeButton
            text={'Technology'}
            img={images[8]}
            setState={setTheme}
            theme={'technology'}
            state={theme}
          />
          <ThemeButton
            text={'Travel'}
            img={images[9]}
            setState={setTheme}
            theme={'travel'}
            state={theme}
          />
        </View>
        <View style={styles.buttons}>
          <View style={styles.containerRowButtons}>
            <ColorButtonSmaller
              text={'Cancel'}
              color={'white'}
              action={() => {
                action();
                setTheme(themeState.app.color);
              }}
            />
            <ColorButtonSmaller
              text={'Accept'}
              color={'blue'}
              action={themeSelector}
            />
          </View>
        </View>
      </View>
    </>
  );
};
