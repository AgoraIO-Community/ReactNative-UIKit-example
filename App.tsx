import React, {useState} from 'react';
import AgoraUIKit, {PropsInterface} from 'agora-rn-uikit';

const App = () => {
  const [videoCall, setVideoCall] = useState(true);
  const props: PropsInterface = {
    rtcProps: {
      appId: '<Agora App ID>',
      channel: 'test',
    },
    callbacks: {
      EndCall: () => setVideoCall(false),
    },
  };

  return videoCall ? (
    <AgoraUIKit rtcProps={props.rtcProps} callbacks={props.callbacks} />
  ) : null;
};

export default App;

