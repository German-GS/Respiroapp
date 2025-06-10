import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import colors from '../styles/Colors';
import * as Google from 'expo-auth-session/providers/google';
import { useEffect } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';



WebBrowser.maybeCompleteAuthSession();


export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [request, response, promptAsync] = Google.useAuthRequest({
  expoClientId: 'TU_EXPO_CLIENT_ID.apps.googleusercontent.com',
  androidClientId: 'TU_ANDROID_CLIENT_ID.apps.googleusercontent.com',
  iosClientId: 'TU_IOS_CLIENT_ID.apps.googleusercontent.com',
  webClientId: 'TU_WEB_CLIENT_ID.apps.googleusercontent.com',
});

useEffect(() => {
  if (response?.type === 'success') {
    const { authentication } = response;
    console.log('✅ Google Login OK:', authentication);
    // Aquí podés continuar con Firebase si querés
  }
}, [response]);


  return (
    <View style={styles.container}>
      <Image source={require('../assets/img/Logo-verde.png')} style={styles.logo} />
      <Text style={styles.title}>Bienvenido a Respiro</Text>

      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        placeholderTextColor={colors.text}
        onChangeText={setEmail}
        value={email}
        keyboardType="email-address"
      />

      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        placeholderTextColor={colors.text}
        onChangeText={setPassword}
        value={password}
        secureTextEntry
      />

      <TouchableOpacity style={styles.button} onPress={() => console.log('Login')}>
        <Text style={styles.buttonText}>Iniciar sesión</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.googleButton}>
        <FontAwesome name="google" size={24} color="#405159" style={{ marginRight: 10 }} />
        <Text style={styles.googleButtonText}>Iniciar sesión con Google</Text>
        </TouchableOpacity>

      <Text style={styles.forgotText}>¿Olvidaste tu contraseña?</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 24,
  },
  title: {
    fontSize: 22,
    marginBottom: 24,
    color: colors.text,
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    height: 48,
    backgroundColor: colors.secondary,
    borderRadius: 12,
    paddingHorizontal: 16,
    marginBottom: 16,
    color: colors.text,
  },
  button: {
    backgroundColor: colors.primary,
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 48,
    marginBottom: 16,
  },
  buttonText: {
    color: colors.background,
    fontWeight: 'bold',
    fontSize: 16,
  },
  forgotText: {
    color: colors.text,
    textDecorationLine: 'underline',
  },

  //Google button styles
 googleButton: {
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor: '#E8E3D9', // tono beige suave
  borderRadius: 12,
  paddingVertical: 12,
  paddingHorizontal: 20,
  borderWidth: 1,
  borderColor: '#D0CBBE', // borde tenue
  marginTop: 16,
},

googleIcon: {
  width: 20,
  height: 20,
  marginRight: 12,
  resizeMode: 'contain',
},

googleButtonText: {
  color: '#405159', // gris azulado de la paleta
  fontSize: 15,
}


});



