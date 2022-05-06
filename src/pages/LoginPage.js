import React, { useState } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, View, Image, } from 'react-native';
import { TextInput, Button, Card, Title } from 'react-native-paper';



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
        alignItems: 'center',
        marginBottom: 20
    }}
    >
        <Image 
            style={{height: 50, width: 200}}
            source={{uri: 'https://eoffice.merapgroup.com/eoffice/ckfinder/userfiles/images/logo.png'}} 
        />
    </View>
    <Card style={styles.form} >
        <TextInput
            placeholder='Điện thoại'
            onChangeText={onChangeText}
            value={text}
            mode="outlined"
            style={styles.input}
            outlineColor="#d9d9d9"
            
        />

        <TextInput
            placeholder='Mật khẩu'
            onChangeText={onChangePassword}
            value={password}
            mode="outlined"
            secureTextEntry={true}
            style={styles.input}
            outlineColor="#d9d9d9"
        />
        <Button 
            mode="contained"
            onPress={() => console.log('Pressed')}>
            ĐĂNG NHẬP
        </Button>
            
        </Card>
    </View>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 3,
    justifyContent: 'center',
    backgroundColor: '#FFFFFF'
  },
  header: {
    backgroundColor: '#00A79D',
    height: 40
  },
  buttonsContainer: {
    padding: 10
  },
  input: {
    marginBottom: 20,
    backgroundColor: '#FFFFFF',
    
  },
  form: {
    padding: 20,
    marginLeft: 10,
    marginRight: 10
  }
});

export default App;