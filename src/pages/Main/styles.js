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

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 20px;
`;

export const User = styled.View`
  align-items: center;
  margin: 0 20px 30px;
`;

export const Avatar = styled.Image`
  width: 64px;
  height: 64px;
  border-radius: 32px;
  background: #eee;
`;

export const Name = styled.Text`
  font-size: 14px;
  color: #fff;
  font-weight: bold;
  margin-top: 4px;
`;

export const Bio = styled.Text.attrs({
  numberOfLines: 2,
})`
  font-size: 13px;
  line-height: 18px;
  color: #fff;
  margin-top: 5px;
  text-align: center;
`;

export const ProfileButton = styled(RectButton)`
  margin-top: 10px;
  align-self: stretch;
  border-radius: 40px;
  background: #fff;
  justify-content: center;
  align-items: center;
  height: 36px;
`;

export const ProfileButtonText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #ee5676;
  text-transform: uppercase;
`;
