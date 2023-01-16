import React from 'react';
import {TouchableOpacity} from 'react-native';
import Svg, {Path} from 'react-native-svg';

interface IProps {
  isInfo?: boolean;
  isActive?: boolean;
  onPress?: () => void;
}

export const HeartIcon = ({isInfo = false, isActive, onPress}: IProps) => {
  if (isInfo) {
    return (
      <Svg width="12px" height="12px" viewBox="0 0 230 230">
        <Path
          fill="black"
          d="M213.588,120.982L115,213.445l-98.588-92.463C-6.537,96.466-5.26,57.99,19.248,35.047l2.227-2.083
                  c24.51-22.942,62.984-21.674,85.934,2.842L115,43.709l7.592-7.903c22.949-24.516,61.424-25.784,85.936-2.842l2.227,2.083
                  C235.26,57.99,236.537,96.466,213.588,120.982z"
        />
      </Svg>
    );
  }
  return (
    <TouchableOpacity onPress={onPress}>
      <Svg
        strokeWidth="15"
        stroke="red"
        width="12px"
        height="12px"
        viewBox="0 0 230 230">
        <Path
          fill={isActive ? 'red' : 'white'}
          d="M213.588,120.982L115,213.445l-98.588-92.463C-6.537,96.466-5.26,57.99,19.248,35.047l2.227-2.083
                  c24.51-22.942,62.984-21.674,85.934,2.842L115,43.709l7.592-7.903c22.949-24.516,61.424-25.784,85.936-2.842l2.227,2.083
                  C235.26,57.99,236.537,96.466,213.588,120.982z"
        />
      </Svg>
    </TouchableOpacity>
  );
};
