import React, { useState } from 'react';
import { Platform, SafeAreaView, StatusBar, StyleSheet, Text, View, Image, TextInput } from 'react-native';
import { TextInput as  MTextInput, Button } from 'react-native-paper';



const STYLES = ['default', 'dark-content', 'light-content'];

const App = ({navigation}) => {
  const [statusBarStyle, setStatusBarStyle] = useState(STYLES[0]);
  const [text, onChangeText] = React.useState("");
  const [password, onChangePassword] = React.useState('');


  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor="#00A79D"
        barStyle={statusBarStyle}
        hidden={false} 
        
    />
   
    
    <View style={styles.container}>
    <View style={{
        justifyContent: 'center', 
        alignContent: 'center', 
        alignItems: 'center'}}
    >
        <Image 
            style={{height: 50, width: 200}}
            source={{uri: 'https://eoffice.merapgroup.com/eoffice/ckfinder/userfiles/images/logo.png'}} 
        />
    </View>
    <View style={styles.form}>
        <MTextInput
            label="Điện thoại"
            onChangeText={onChangeText}
            value={text}
            mode="outlined"
            style={styles.input}
        />

        <MTextInput
            label="Mật khẩu"
            onChangeText={onChangePassword}
            value={password}
            mode="outlined"
            secureTextEntry={true}
            style={styles.input}
        />
        <Button 
            mode="contained" 
            
            onPress={() => console.log('Pressed')}>
            ĐĂNG NHẬP
        </Button>
            
        </View>
    </View>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 3,
    justifyContent: 'center',
    backgroundColor: '#ECF0F1'
  },
  header: {
    backgroundColor: '#00A79D',
    height: 40
  },
  buttonsContainer: {
    padding: 10
  },
  input: {
    marginBottom: 20
  },
  form: {
    padding: 10
  }
});

export default App;