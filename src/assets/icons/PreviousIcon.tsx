import {TouchableOpacity} from 'react-native';
import Svg, {Polygon} from 'react-native-svg';

interface IProps {
  disabled: boolean;
  onPress: () => void;
}

export const PreviousIcon = ({disabled, onPress}: IProps) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={{width: 20, height: 20}}>
      <Svg
        fill={disabled ? '#DADADA' : '#000000'}
        width="20"
        height="20"
        viewBox="0 0 24 24">
        <Polygon points="17.2,23.7 5.4,12 17.2,0.3 18.5,1.7 8.4,12 18.5,22.3" />
      </Svg>
    </TouchableOpacity>
  );
};
