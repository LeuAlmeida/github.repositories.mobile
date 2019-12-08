import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  padding: 30px;
`;

export const Form = styled.View`
  flex-direction: row;
  padding-bottom: 20px;
`;
export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#ffffffa1',
})`
  flex: 1;
  height: 40px;
  background: transparent;
  padding: 0 5px;
  border-bottom-width: 1px;
  border-color: #fff;
  color: #fff;
`;

export const SubmitButton = styled(RectButton)`
  justify-content: center;
  align-items: center;
  background: #fff;
  border-radius: 40px;
  margin-left: 10px;
  padding: 0 12px;
`;
