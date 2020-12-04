import firebase from 'firebase';
import { CheerType } from '../../types';


export const submitCheer = (receiver: string, cheerType: CheerType, cheerContent: string, optionalName: string) => {

  const cheerData = {
    receiver,
    cheerType,
    cheerContent,
  };

  const newCheerKey = firebase.database().ref().child('cheers').push().key;

  const updates = {} as Record<string, any>;
  updates[`cheers/${newCheerKey}`] = cheerData;

  return firebase.database().ref().update(updates);
}