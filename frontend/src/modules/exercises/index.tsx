import React, {useState} from 'react';
export const ExercisesView: React.FC = () => {
  const [filter,setFilter]=useState('high');
  return <div><h2>EXERCISES - Exercises - cloze, multiple choice, dict</h2><p>cloze</p></div>
};
export default ExercisesView;
