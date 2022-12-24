import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {
  ViroARScene,
  ViroText,
  ViroTrackingStateConstants,
  ViroARSceneNavigator,
  ViroARImageMarker,
  ViroBox,
  ViroVideo,
  ViroARTrackingTargets,
} from '@viro-community/react-viro';

const HelloWorldSceneAR = () => {
  const [text, setText] = useState('Initializing AR...');

  function onInitialized(state, reason) {
    console.log('guncelleme', state, reason);
    if (state === ViroTrackingStateConstants.TRACKING_NORMAL) {
      setText('Programmer UZ!');
    }
  }

  ViroARTrackingTargets.createTargets({
    targetOne: {
      source: require('./assets/target.jpg'),
      orientation: 'Up',
      physicalWidth: 0.03, // real world width in meters
    },
  });
  return (
    <ViroARScene onTrackingUpdated={onInitialized}>
      <ViroText
        text={text}
        scale={[0.1, 0.1, 0.1]}
        position={[0, 0, -1]}
        style={styles.helloWorldTextStyle}
      />
      <ViroVideo source={require('./assets/result.mp4')} />
      <ViroARImageMarker target={'targetOne'}>
        {/*<ViroBox position={[0, 0.25, 0]} scale={[0.1, 0.1, 0.1]} />*/}
      </ViroARImageMarker>
    </ViroARScene>
  );
};

export default () => {
  return (
    <ViroARSceneNavigator
      autofocus={true}
      initialScene={{
        scene: HelloWorldSceneAR,
      }}
      style={styles.f1}
    />
  );
};

var styles = StyleSheet.create({
  f1: {flex: 1},
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 24,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});
