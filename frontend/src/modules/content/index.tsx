import React, {useState} from 'react';
export const ContentView: React.FC = () => {
  const [filter,setFilter]=useState('high');
  return <div><h2>CONTENT - Content - courses, playlists, curricula</h2><p>courses</p></div>
};
export default ContentView;
