import React, { useCallback, useState } from 'react';
import { useFirebase } from 'react-redux-firebase';
import Select from 'react-select';

import { Cheer, CheerType } from '../../types';


const cheerOptions = [{
  value: CheerType.ASPIRE, label: 'Always Aspire',
}, {
  value: CheerType.BRAVE, label: 'Be Brave',
}, {
  value: CheerType.CHAMPION, label: 'Champion Community',
}];

function SubmitCheerScreen() {

  const firebase = useFirebase();

  const [receiver, setReceiver] = useState('');
  const [cheerType, setCheerType] = useState(cheerOptions[0]);
  const [cheerContent, setCheerContent] = useState('');
  const [optionalName, setOptionalName] = useState('');

  const submitCheer = useCallback(() => {
    const cheerData: Cheer = {
      receiver,
      cheerType: cheerType.value,
      cheerContent,
      optionalName,
    };
    firebase.push('cheers', cheerData);
    setReceiver('');
    setCheerType(cheerOptions[0]);
    setCheerContent('');
    setOptionalName('');
  }, [receiver, cheerType.value, cheerContent, optionalName, firebase]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column'}}>
      <label htmlFor="receiver">Receiver:</label>
      <input name="receiver" type="text" value={receiver} onChange={e => setReceiver(e.target.value)} />
      <label htmlFor="cheerType">Cheer type:</label>
      <Select 
        value={cheerType} 
        options={cheerOptions}
        onChange={(change) => change && setCheerType(change)}
      />
      <label htmlFor="cheerContent">Cheer:</label>
      <textarea name="cheerContent" value={cheerContent} onChange={e => setCheerContent(e.target.value)} />
      <label htmlFor="optionalName">Your name (optional):</label>
      <input name="optionalName" type="text" value={optionalName} onChange={e => setOptionalName(e.target.value)} />
      <button type="submit" onClick={submitCheer}>Submit!</button>
    </div>
  );
}

export default SubmitCheerScreen;
