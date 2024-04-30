import { SafeAreaView, StyleSheet, View, Platform, Text } from "react-native";
import { StatusBar } from "expo-status-bar";

export default Layout = ({ children }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style="light" />
      <View style={styles.contaier}>{children}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  contaier: {
    flex: 1,
    paddingTop: Platform.OS === "android" && 10,
    backgroundColor: "rgb(7,26,93)",
    paddingHorizontal: 15,
  },
});
