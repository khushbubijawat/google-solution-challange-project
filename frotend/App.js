import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import RootNavigation from "./Navigation/RootNavigation";

export default function App() {

  return (
    <>
      <StatusBar style="dark" />
      <RootNavigation />
    </>
  );
}

