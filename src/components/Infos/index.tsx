import { Text, View } from "react-native";
import { styles } from "./styles";

interface infosProps {
  text: string;
  value: number;
  color: string;
}

export function Infos({ text, value, color }: infosProps) {
  return (
    <>
      <View style={styles.container}>
        <Text style={{ color: `${color}` }}>{text}</Text>
        <View style={styles.countContainer}>
          <Text style={styles.countText}>{value}</Text>
        </View>
      </View>
    </>
  );
}
