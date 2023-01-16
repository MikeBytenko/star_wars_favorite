import {useWindowDimensions, View} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {memo} from 'react';
import {styles} from './styles';

const LoadingMainScreen = () => {
  const {width: WINDOW_WIDTH} = useWindowDimensions();

  const Items = memo(() => (
    <View style={styles.item1}>
      <SkeletonPlaceholder backgroundColor={'#f6f5f3'}>
        <SkeletonPlaceholder.Item
          width={WINDOW_WIDTH - 32}
          borderRadius={2}
          height={'100%'}
          paddingHorizontal={4}
          paddingVertical={4}
          alignItems="center">
          <SkeletonPlaceholder.Item
            marginVertical={20}
            alignSelf="center"
            width={'90%'}
            height={40}
            borderRadius={8}
          />
          <SkeletonPlaceholder.Item flex={1} width={'90%'}>
            <SkeletonPlaceholder.Item
              marginBottom={3}
              width={'100%'}
              height={50}
              borderTopRightRadius={8}
              borderTopLeftRadius={8}
            />
            <SkeletonPlaceholder.Item
              marginBottom={3}
              width={'100%'}
              height={40}
            />
            <SkeletonPlaceholder.Item
              marginBottom={3}
              width={'100%'}
              height={40}
            />
            <SkeletonPlaceholder.Item
              marginBottom={3}
              width={'100%'}
              height={40}
            />
            <SkeletonPlaceholder.Item
              marginBottom={3}
              width={'100%'}
              height={40}
            />
            <SkeletonPlaceholder.Item
              marginBottom={3}
              width={'100%'}
              height={40}
            />
            <SkeletonPlaceholder.Item
              marginBottom={3}
              width={'100%'}
              height={40}
            />
            <SkeletonPlaceholder.Item
              marginBottom={3}
              width={'100%'}
              height={40}
            />
            <SkeletonPlaceholder.Item
              marginBottom={3}
              width={'100%'}
              height={40}
            />
            <SkeletonPlaceholder.Item
              marginBottom={3}
              width={'100%'}
              height={40}
            />
            <SkeletonPlaceholder.Item
              marginBottom={3}
              width={'100%'}
              height={40}
            />
            <SkeletonPlaceholder.Item
              marginBottom={3}
              width={'100%'}
              height={40}
            />
          </SkeletonPlaceholder.Item>
        </SkeletonPlaceholder.Item>
      </SkeletonPlaceholder>
    </View>
  ));

  const Info = memo(() => (
    <View style={styles.infoContainer}>
      <View style={styles.info}>
        <SkeletonPlaceholder backgroundColor={'#f6f5f3'}>
          <SkeletonPlaceholder.Item
            width={WINDOW_WIDTH - 32}
            borderRadius={2}
            height={65}
            paddingHorizontal={4}
            paddingVertical={4}>
            <SkeletonPlaceholder.Item
              marginTop={5}
              marginRight={24}
              aspectRatio={1}
              height={30}
              borderRadius={8}
            />
            <SkeletonPlaceholder.Item
              marginTop={5}
              marginRight={24}
              aspectRatio={6}
              height={15}
              borderRadius={8}
            />
          </SkeletonPlaceholder.Item>
        </SkeletonPlaceholder>
      </View>
      <View style={styles.info}>
        <SkeletonPlaceholder backgroundColor={'#f6f5f3'}>
          <SkeletonPlaceholder.Item
            width={WINDOW_WIDTH - 32}
            borderRadius={2}
            height={65}
            paddingHorizontal={4}
            paddingVertical={4}>
            <SkeletonPlaceholder.Item
              marginTop={5}
              marginRight={24}
              aspectRatio={1}
              height={30}
              borderRadius={8}
            />
            <SkeletonPlaceholder.Item
              marginTop={5}
              marginRight={24}
              aspectRatio={6}
              height={15}
              borderRadius={8}
            />
          </SkeletonPlaceholder.Item>
        </SkeletonPlaceholder>
      </View>
      <View style={styles.info}>
        <SkeletonPlaceholder backgroundColor={'#f6f5f3'}>
          <SkeletonPlaceholder.Item
            width={WINDOW_WIDTH - 32}
            borderRadius={2}
            height={65}
            paddingHorizontal={4}
            paddingVertical={4}>
            <SkeletonPlaceholder.Item
              marginTop={5}
              marginRight={24}
              aspectRatio={1}
              height={30}
              borderRadius={8}
            />
            <SkeletonPlaceholder.Item
              marginTop={5}
              marginRight={24}
              aspectRatio={6}
              height={15}
              borderRadius={8}
            />
          </SkeletonPlaceholder.Item>
        </SkeletonPlaceholder>
      </View>
    </View>
  ));

  return (
    <View style={styles.container}>
      <View style={styles.mainViewStyle}>
        <SkeletonPlaceholder backgroundColor={'#f6f5f3'}>
          <SkeletonPlaceholder.Item
            width={WINDOW_WIDTH}
            borderRadius={8}
            marginTop={10}
            height="auto"
            paddingHorizontal={22}
            paddingVertical={5}
            alignItems="center"
            flexDirection="row">
            <SkeletonPlaceholder.Item flex={1}>
              <SkeletonPlaceholder.Item
                marginBottom={8}
                width={'30%'}
                height={40}
                borderRadius={8}
              />
            </SkeletonPlaceholder.Item>

            <SkeletonPlaceholder.Item
              backgroundColor={'#b7b6b6'}
              marginBottom={8}
              width={'33%'}
              height={40}
              borderRadius={8}
            />
          </SkeletonPlaceholder.Item>
        </SkeletonPlaceholder>
      </View>
      <Info />
      <Items />
    </View>
  );
};

export default LoadingMainScreen;
