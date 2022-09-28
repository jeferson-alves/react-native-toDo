import { Image, Text, View } from "react-native";
import { styles } from "./styles";

export function EmptyTask() {
  return (
    <View style={styles.container}>
      <Image source={require("../../../assets/Clipboard.png")} />
      <Text style={styles.txt1}>Você ainda não tem tarefas cadastradas</Text>
      <Text style={styles.txt2}>
        Crie tarefas e organize seus itens a fazer
      </Text>
    </View>
  );
}
