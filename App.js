import React from 'react';
import MainStack from './Navigation/MainStack';
import { ContextProvider } from './contextState.js';




 
export default function App() {
  
  return (
    
    <ContextProvider>
      <MainStack/>
    </ContextProvider>
 
  );
}