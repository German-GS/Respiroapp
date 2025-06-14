import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';
import colors from '../styles/Colors';

export default function RegisterScreen({ navigation }) {
  const [nombre, setNombre] = useState('');
  const [fechaNacimiento, setFechaNacimiento] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [motivo, setMotivo] = useState('');
  const [nivelMalestar, setNivelMalestar] = useState('');
  const [aceptaTerminos, setAceptaTerminos] = useState(false);

  const handleRegister = () => {
    if (!nombre || !email || !password || !aceptaTerminos) {
      Alert.alert("Completa todos los campos obligatorios.");
      return;
    }

    // Aquí iría la lógica para registrar al usuario en Firebase
    console.log({
      nombre, fechaNacimiento, email, password, motivo, nivelMalestar
    });

    // Navegar o mostrar mensaje de éxito
    Alert.alert("Registro exitoso");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Registro en Respiro</Text>

      <TextInput
        style={styles.input}
        placeholder="Nombre completo"
        placeholderTextColor={colors.text}
        onChangeText={setNombre}
        value={nombre}
      />
      <TextInput
        style={styles.input}
        placeholder="Fecha de nacimiento (DD/MM/AAAA)"
        placeholderTextColor={colors.text}
        onChangeText={setFechaNacimiento}
        value={fechaNacimiento}
      />
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
      <TextInput
        style={styles.input}
        placeholder="¿Qué te motivó a usar la app?"
        placeholderTextColor={colors.text}
        onChangeText={setMotivo}
        value={motivo}
      />
      <TextInput
        style={styles.input}
        placeholder="¿Cómo te sentís hoy? (1 a 10)"
        placeholderTextColor={colors.text}
        onChangeText={setNivelMalestar}
        value={nivelMalestar}
        keyboardType="numeric"
      />

      <TouchableOpacity
        style={[styles.termsBox, aceptaTerminos && styles.termsBoxChecked]}
        onPress={() => setAceptaTerminos(!aceptaTerminos)}
      >
        <Text style={styles.termsText}>
          {aceptaTerminos ? '✅' : '⬜️'} Acepto los términos y condiciones
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Registrarme</Text>
      </TouchableOpacity>

      <Text style={styles.linkText}>
        ¿Ya tenés cuenta?{' '}
        <Text style={styles.link} onPress={() => navigation.navigate('Login')}>
          Iniciar sesión
        </Text>
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    padding: 24,
    paddingBottom: 60,
  },
  title: {
    fontSize: 22,
    color: colors.text,
    textAlign: 'center',
    marginBottom: 24,
    fontWeight: 'bold',
  },
  input: {
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
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 24,
  },
  buttonText: {
    color: colors.background,
    fontWeight: 'bold',
    fontSize: 16,
  },
  linkText: {
    color: colors.text,
    textAlign: 'center',
  },
  link: {
    color: colors.primary,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  termsBox: {
    marginBottom: 16,
  },
  termsBoxChecked: {
    opacity: 0.9,
  },
  termsText: {
    color: colors.text,
  },
});
