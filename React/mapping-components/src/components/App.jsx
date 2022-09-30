import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

function createEntry(entry) {
  return (
    <div>
      <Entry 
      key = {entry.id}
        emoji = {entry.emoji}
        name = {entry.name}
        detail = {entry.meaning}
       
        />
    </div>
  );
}

function App() {
  return (
    <div>
          <h1>
        <span>emojipedia</span>
      </h1>
      {emojipedia.map(createEntry)}
    </div>
  );
}

export default App;
