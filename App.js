import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Application from "./src/App";

export default function App() {
  return (
    [<StatusBar hidden={true}></StatusBar>,<Application />]
  );
}
