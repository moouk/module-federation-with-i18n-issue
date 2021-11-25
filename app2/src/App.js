import LocalButton from "./Button";
import React from "react";
import i18next from "i18next";

i18next.init({
  lng: 'en', // if you're using a language detector, do not define the lng option
  debug: true,
  resources: {
    en: {
      translation: {
        "key": "hello world"
      }
    }
  }
});

const App = () => (
  <div>
    <h1>Basic Host-Remote</h1>
    <h2>App 2</h2>
    <LocalButton />
  </div>
);

export default App;
