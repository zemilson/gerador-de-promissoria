import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

interface PromissoryNoteProps {
  data: {
    valor: string;
    vencimento: string;
    emissao: string;
    devedor: string;
    cpfDevedor: string;
    credor: string;
    cpfCredor: string;
  };
}

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontSize: 12,
  },
  title: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: 'bold',
  },
  header: {
    marginBottom: 20,
  },
  valor: {
    fontSize: 14,
    marginBottom: 10,
  },
  text: {
    marginBottom: 10,
    lineHeight: 1.5,
  },
  signature: {
    marginTop: 50,
    textAlign: 'center',
  },
  line: {
    width: '60%',
    borderBottom: '1px solid black',
    marginHorizontal: 'auto',
  },
});

const formatarValor = (valor: string) => {
  const num = parseFloat(valor);
  return num.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
};

const formatarData = (data: string) => {
  return new Date(data).toLocaleDateString('pt-BR');
};

const PromissoryNote: React.FC<PromissoryNoteProps> = ({ data }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Text style={styles.title}>NOTA PROMISSÓRIA</Text>
      
      <View style={styles.header}>
        <Text style={styles.valor}>
          Valor: {formatarValor(data.valor)}
        </Text>
        <Text style={styles.text}>
          Vencimento: {formatarData(data.vencimento)}
        </Text>
      </View>

      <Text style={styles.text}>
        Ao(s) {formatarData(data.vencimento)}, pagarei por esta única via de NOTA PROMISSÓRIA a {data.credor}, 
        CPF: {data.cpfCredor}, ou à sua ordem, a quantia de {formatarValor(data.valor)} ({data.valor} reais).
      </Text>

      <Text style={styles.text}>
        Pagável em qualquer banco até o vencimento.
      </Text>

      <Text style={styles.text}>
        Local e data de emissão: ___________________, {formatarData(data.emissao)}
      </Text>

      <View style={styles.signature}>
        <View style={styles.line} />
        <Text>
          {data.devedor}
        </Text>
        <Text>
          CPF: {data.cpfDevedor}
        </Text>
      </View>
    </Page>
  </Document>
);

export default PromissoryNote; 