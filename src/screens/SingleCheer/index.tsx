import React from 'react';
import { useSelector } from 'react-redux';
import { useFirebaseConnect } from 'react-redux-firebase';
import { useParams } from 'react-router-dom';
import { Cheer } from '../../types';


export interface ISingleCheerScreenRouteParams {
  id: string;
}

function SingleCheerScreen() {

  const params = useParams() as ISingleCheerScreenRouteParams;
  const { id } = params;

  useFirebaseConnect([{
    path: `cheers/${id}`
  }]);

  const cheer: Cheer = useSelector((state: any) => state.firebase.data.cheers && state.firebase.data.cheers[id]);

  return (
    <div>
      {cheer ? 
        (
          <div>
            <p>{cheer.receiver}</p>
            <p>{cheer.cheerType}</p>
            <p>{cheer.cheerContent}</p>
            {cheer.optionalName && <p>{cheer.optionalName}</p>}
          </div>
        ) : null
      }
    </div>
  );
};

export default SingleCheerScreen;
