import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import Ion from "react-native-vector-icons/Ionicons";
import Label from "../components/Label";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function SignUp({ navigation }) {
  // const navigation = useNavigation();
  const [name, onChangeName] = useState('');
  const [email, onChangeEmail] = useState('');
  const [phone, onChangePhone] = useState('');
  const [password, onChangePassword] = useState('');
  const [cpassword, onChangeCPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    setError('')
    setSuccess('')

    const isValidEmail = /\S+@\S+\.\S+/.test(email);
    const isphoneNo = phone.length;
    console.log(isphoneNo);
    if (!name) {
      setError("FullName Required")
    } else if (!isValidEmail) {
      setError("Invalid Email")
    } else if (!phone) {
      setError("phoneNo Required")
    } else if (isphoneNo != 10) {
      setError("Phone no is not valid")
    } else if (!password) {
      setError("Password Required")
    } else if (!cpassword) {
      setError("Conform Password Required")
    } else if (password != cpassword) {
      setError("Password Not match")
    } else {

      let result = await fetch('http://localhost:5000/v1/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, phone, password })
      })
        .then(res => res.json()).then(
          async data => {
            console.log(data);
            if (data.success == false) {
              setError(data.message);
            } else if (data.success == true) {
              await AsyncStorage.setItem("UserInfo", data.message);
            }
          }
        )
    }
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>

      <Ion
        name="person-circle-outline"
        color="#000"
        size={100}
        style={styles.icon}
      />
      <ScrollView style={styles.screen}>
        <KeyboardAvoidingView behavior="position" style={styles.screen}>
          <View style={styles.inputContainer}>
            <View>
              <Label>Name</Label>
              <TextInput
                keyboardType="default"
                placeholder="Enter your Name"
                style={styles.input}
                value={name} placeholderTextColor="gray" onChangeText={onChangeName}
              />
            </View>
            <View>
              <Label>Email</Label>
              <TextInput
                keyboardType="email-address"
                placeholder="Enter your email"
                style={styles.input}
                value={email} placeholderTextColor="gray" onChangeText={onChangeEmail}
              />
            </View>
            <View>
              <Label>Phone</Label>
              <TextInput
                keyboardType="default"
                placeholder="Enter your Phone"
                style={styles.input}
                value={phone} placeholderTextColor="gray" onChangeText={onChangePhone}
              />
            </View>
            <View>
              <Label>Password</Label>
              <TextInput
                secureTextEntry={true}
                placeholder="Enter your password"
                style={styles.input}
                placeholderTextColor="gray" value={password} onChangeText={onChangePassword}
              />
            </View>
            <View>
              <Label>Confirm Password</Label>
              <TextInput
                secureTextEntry={true}
                placeholder="Enter your password"
                style={styles.input}
                onBlur={() => console.log("onBlur")}
                placeholderTextColor="gray" value={cpassword} onChangeText={onChangeCPassword}
              />
            </View>
          </View>

          <Text style={styles.text}>
            Have an Account ?{" "}
            <Pressable onPress={() => navigation.navigate("SignIn")}>
              <Text style={styles.signUpText}> Sign In</Text>
            </Pressable>
          </Text>
          <View>
            <View style={styles.button}>
              <Button title="Sign Up" onPress={handleSubmit} />
            </View>
            <View style={styles.button}>
              <Button title="Sign Up With Google" />
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    marginTop: 40,
    padding: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
  icon: {
    alignSelf: "center",
    // marginVertical: 10,
  },

  inputContainer: {
    flex: 1,
    marginVertical: 10,
  },

  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 2,
    borderRadius: 10,

    padding: 10,
  },
  signUpText: { textDecorationLine: "underline", color: "#2E67F8" },
  text: { marginVertical: 4 },
  button: {
    marginVertical: 10,
  },
});
