import React, {useState} from 'react';
export const FrontendView: React.FC = () => {
  const [filter,setFilter]=useState('high');
  return <div><h2>FRONTEND - Frontend - media grid, player, flashcard</h2><p>media grid</p></div>
};
export default FrontendView;
