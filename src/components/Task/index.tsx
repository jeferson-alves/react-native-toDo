import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "../Task/styles";

interface TaskProps {
  text: string;
  done: boolean;
  onRemove: () => void;
  onSelect: () => void;
}

export function Task({ text, done, onRemove, onSelect }: TaskProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onSelect}>
        {done ? (
          <Image source={require("../../../assets/checked.png")} />
        ) : (
          <Image source={require("../../../assets/check.png")} />
        )}
      </TouchableOpacity>
      <Text style={done ? styles.textDone : styles.text}>{text}</Text>
      <TouchableOpacity onPress={onRemove}>
        <Image source={require("../../../assets/trash.png")} />
      </TouchableOpacity>
    </View>
  );
}
