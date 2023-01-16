import {TouchableOpacity} from 'react-native';
import Svg, {Polygon} from 'react-native-svg';

interface IProps {
  disabled: boolean;
  onPress: () => void;
}

export const NextIcon = ({disabled, onPress}: IProps) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={{width: 20, height: 20}}>
      <Svg
        fill={disabled ? '#DADADA' : '#000000'}
        width="20"
        height="20"
        viewBox="0 0 42 42">
        <Polygon
          fill-rule="evenodd"
          points="11,38.32 28.609,21 11,3.68 13.72,1 34,21.01 13.72,41 "
        />
      </Svg>
    </TouchableOpacity>
  );
};
