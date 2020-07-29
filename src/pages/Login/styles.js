import StyleSheet from 'react-native';

const styles1 = StyleSheet.create({
  txtOu: {
    color: 'red',
    fontWeight: 'bold',
  },
  btnGoogle: {
    backgroundColor: '#E42D27',
  },
  btnFacebook: {
    backgroundColor: '#124A7B',
  },
  txtBtn: {
    color: 'white',
    fontWeight: 'bold',
  },
  buttonView1: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  btn: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2.5,
    padding: 12,
  },
  buttonViewBtn: {
    backgroundColor: '#E42D27',
    width: '100%',
  },
  buttonView: {
    //marginTop:5,
    width: '100%',
    marginBottom: 20,
  },
  inputView: {
    width: '100%',
    display: 'flex',
    marginBottom: 19,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.6)',
    //border: 1px solid rgba(255,255,255,0.6);
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 5,
    backgroundColor: 'rgba(255,255,255,0.19)',
  },
  inputText: {
    width: '100%',
    color: 'white',
    padding: 8,
    backgroundColor: 'transparent',
  },
  info1: {
    color: 'rgba(255,255,255,0.5)',
    letterSpacing: 2,
    //font-family: 'Billabong';
    fontSize: 18,
    //borderBottom: '0.05rem solid rgba(255,255,255,0.5)',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255,255,255,0.5)',
    padding: 2,
    borderRadius: 5,
    //borderBottomEndRadius:5,
    paddingRight: 10,
    paddingLeft: 10,
    marginBottom: 25,
  },
  txtInfo: {
    //font-family: 'Billabong' !important;
    //fontFamily:'Billabong',
    fontWeight: 'bold',
    letterSpacing: 3,
    fontSize: 14,
    color: '#B90100',
  },
  info: {
    padding: 5,
    paddingLeft: 8,
    borderLeftColor: '#B90100',
    borderLeftWidth: 0.5,
    marginLeft: 10,
  },
  box1: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  contlogo: {
    width: 116,
    height: 120,
  },
  logo: {
    width: '100%',
    height: '100%',
  },
  view: {
    backgroundColor: 'rgba(0,0,0,0.8)',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 45,
    paddingRight: 45,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.9)',
  },
});
