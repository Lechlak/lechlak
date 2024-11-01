"use client";
import React from "react";
import NewComponent2 from "../components/new-component-2";
import NewComponent from "../components/new-component";

function MainComponent() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <NewComponent2 />
    </div>
  );
}

export default MainComponent;