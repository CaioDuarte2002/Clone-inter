import { View, Text, Image, ScrollView } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { styles } from "./style";

export default function Main() {
  return (
    <View style={styles.main}>
      <View style={styles.tabelas}>
        <ScrollView horizontal={true} style={styles.transacoes}>
          {/* cartoes*/}

          <View style={styles.tabelas1}>
            <View style={styles.transacao}>
              <AntDesign
                name="creditcard"
                size={20}
                color="orange"
                style={styles.icontransacao}
              />
              <Text>Cartoes</Text>
            </View>
          </View>
          {/* Fim do cartoes */}

          {/* Pix */}
          <View style={styles.tabelas1}>
            <View style={styles.transacao}>
              <AntDesign
                name="bank"
                size={20}
                color="orange"
                style={styles.icontransacao}
              />
              <Text>Pix</Text>
            </View>
          </View>
          {/* Fim do Pix */}

          {/* investir */}
          <View style={styles.tabelas1}>
            <View style={styles.transacao2}>
              <AntDesign
                name="pay-circle-o1"
                size={20}
                color="orange"
                style={styles.icontransacao}
              />
              <Text>investir</Text>
            </View>
          </View>
          {/* Fim do investir */}
        </ScrollView>
      </View>

      <View style={styles.conteudo1}>
<Image style={styles.imagem1} source={{uri:"https://static.bancointer.com.br/blog/banner-images/26b23631-57d7-41aa-ad94-f1206691bdd2.jpg"}}/>



      <View style={styles.conteudo2}>
        <Text>INTERSHOP</Text>
        </View>
      </View>


      <View style={styles.conteudo1}>
<Image style={styles.imagem1} source={{uri:"https://cdnbr.investirglobal.com/2022/07/225504116345ef096fd63-1024x683-1-346x188.jpg"}}/>



      <View style={styles.conteudo2}>
        <Text>global account</Text>

<View style = {styles.tabelas2}>

<View style = {styles.conteudo3}>
  <Image style={styles.imagem2} source={{uri:"https://static.bancointer.com.br/blog/grid-images/a96ebd9ee65c4902befe042c5cece3b1_microsoftteams-image-2.png"}}/>
</View>

<View style = {styles.conteudo3}>
<Image style={styles.imagem2} source={{uri:"https://static.bancointer.com.br/blog/banner-images/cfb89200c3244ff5a7c9862d50f0440a_microsoftteams-image-120.png"}}/>
</View>


</View>

        </View>
      </View>
      </View>
    
  );
}
