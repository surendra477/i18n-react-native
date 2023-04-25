import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { useTranslation } from 'react-i18next';
import SwitchSelector from 'react-native-switch-selector';
const options = [
  {label:'English', value:'en'},
  { label: 'French', value: 'fr' },
  { label: 'Italian', value: 'it' }
]
const App = () => {
  const { t, i18n } = useTranslation();
  return (
      <View style={{marginTop:100}}>
      <SwitchSelector options={options} hasPadding initial={0}
        onPress={(language) => {
          i18n.changeLanguage(language)
        }}
      />
      <Text>{t('translation:welcomeText')}</Text>
    </View>
  );
}

const styles = StyleSheet.create({})

export default App;
