import React from 'react';
import { useSelector } from 'react-redux';
import { useFirebaseConnect } from 'react-redux-firebase';
import PieChart from '../../components/PieChart';
import { Cheer, CheerType } from '../../types';


function ValueWheelContainer() {
  useFirebaseConnect([
    'cheers'
  ]);

  const cheers = useSelector((state: any) => state.firebase.ordered.cheers);

  if (!cheers) {
    return null;
  }

  const aspireCheersPercentage = Math.round(cheers.filter(({ value }: { value: Cheer }) => value.cheerType === CheerType.ASPIRE).length / cheers.length * 100);
  const braveCheersPercentage = Math.round(cheers.filter(({ value }: { value: Cheer }) => value.cheerType === CheerType.BRAVE).length / cheers.length * 100);
  const championCheersPercentage = Math.round(cheers.filter(({ value }: { value: Cheer }) => value.cheerType === CheerType.CHAMPION).length / cheers.length * 100);

  return (
    <PieChart
      width={600} height={600}
      data={[aspireCheersPercentage, braveCheersPercentage, championCheersPercentage]}
    />
  );
}

export default ValueWheelContainer;
