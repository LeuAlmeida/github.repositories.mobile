import Reactotron from 'reactotron-react-native';

if (__DEV__) {
  const tron = Reactotron.configure({ host: '189.78.39.189' })
    .useReactNative()
    .connect();

  console.tron = tron;

  tron.clear();
}
