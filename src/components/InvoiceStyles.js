import { StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontSize: 10,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  logo: {
    width: 150,
    height: 50,
  },
  section: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sectionLeft: {
    width: '48%',
  },
  sectionRight: {
    width: '48%',
    textAlign: 'right',
  },
  address: {
    marginBottom: 5,
  },
  table: {
    display: 'table',
    width: 'auto',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#000',
    marginTop: 10,
  },
  tableRow: {
    flexDirection: 'row',
  },
  tableColHeaderFirst: {
    width: '10%',
    backgroundColor: '#EEE',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#000',
    padding: 5,
    textAlign: 'center',
  },
  tableColHeaderSecond: {
    width: '30%',
    backgroundColor: '#EEE',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#000',
    padding: 5,
    textAlign: 'center',
  },
  tableColHeaderOther: {
    width: '10%',
    backgroundColor: '#EEE',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#000',
    padding: 5,
    textAlign: 'center',
  },
  tableColFirst: {
    width: '10%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#000',
    padding: 5,
    textAlign: 'center',
  },
  tableColSecond: {
    width: '30%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#000',
    padding: 5,
    textAlign: 'center',
  },
  tableColOther: {
    width: '10%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#000',
    padding: 5,
    textAlign: 'center',
  },
  signature: {
    marginTop: 30,
    textAlign: 'right',
  },
  signatureImage: {
    width: 100,
    height: 50,
    alignSelf: 'flex-end', // Align to the right
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  totalText: {
    width: '12.5%',
    textAlign: 'right',
    paddingRight: 10,
    borderTop: '1px solid #000',
  },
  amountWords: {
    marginTop: 10,
    textAlign: 'left',
  },
});

export default styles;
