import React, {useState} from 'react';
export const ProgressView: React.FC = () => {
  const [filter,setFilter]=useState('high');
  return <div><h2>PROGRESS - Progress - streak, XP, levels, CEFR</h2><p>streak</p></div>
};
export default ProgressView;
