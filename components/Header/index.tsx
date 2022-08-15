import { Text, View } from "react-native";
import { styles } from "./style";
import { AntDesign } from "@expo/vector-icons";

export default function Header() {
  return (
    <View style={styles.header}>
     
      <View style = {styles.cabecalho}>
      <Text style={styles.texto2}>INTER</Text>
        <AntDesign
          name="search1"
          size={24}
          color="orange"
          style={{ margin: 10 }}
        />

<AntDesign
          name="iconfontdesktop"
          size={24}
          color="orange"
          style={{ margin: 10 }}
        />
      </View>

      <Text style={styles.saldo}>
        R$ 7.531,59
        <AntDesign name="eye" size={24} color="white" style={styles.icons} />
      </Text>

      <Text style={styles.texto1}>Ver extrato</Text>

      <View style={styles.tabelas}></View>
    </View>
  );
}
