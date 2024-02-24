import { useState } from "react";

import MainComponent from "./components/MainComponent/MainComponent";

function App() {
  const [allData, setAllData] = useState({
    fontFamily: "'IBM Plex Sans', sans-serif",
    mainBg: "#fff",
    centerBoxBg: "#EFF4FF",
    mainTitle: {
      title: "Discussion Summary",
      titleColor: "#fff",
      border: "1px solid #000",
      bg: "#000",
    },
    data: [
      {
        bg: "#D1E0FF",
        border: "1px solid #000",
        boxShadow: "2px 2px 0px 0px #000",
        idContainer: {
          bg: "#84ADFF",
          border: "1px solid #000",
          boxShadow: "4px 4px 0px 0px #000",
        },
        title: "Passive approach Lorem ipsum1",
        titleColor: "#000",
        lists: [
          {
            text: "Comprehensive web search",
            textColor: "#000",
            bg: "#fff",
          },
          {
            text: "Academic & grey literature systemic review",
            textColor: "#000",
            bg: "#fff",
          },
        ],
      },
      {
        bg: "#D1E0FF",
        border: "1px solid #000",
        boxShadow: "2px 2px 0px 0px #000",
        idContainer: {
          bg: "#84ADFF",
          border: "1px solid #000",
          boxShadow: "4px 4px 0px 0px #000",
        },
        title: "Passive approach Lorem ipsum2",
        titleColor: "#000",
        lists: [
          {
            text: "Comprehensive web search",
            textColor: "#000",
            bg: "#fff",
          },
          {
            text: "Academic & grey literature systemic review",
            textColor: "#000",
            bg: "#fff",
          },
        ],
      },
      {
        bg: "#D1E0FF",
        border: "1px solid #000",
        boxShadow: "2px 2px 0px 0px #000",
        idContainer: {
          bg: "#84ADFF",
          border: "1px solid #000",
          boxShadow: "4px 4px 0px 0px #000",
        },
        title: "Passive approach Lorem ipsum3",
        titleColor: "#000",
        lists: [
          {
            text: "Comprehensive web search",
            textColor: "#000",
            bg: "#fff",
          },
          {
            text: "Academic & grey literature systemic review",
            textColor: "#000",
            bg: "#fff",
          },
        ],
      },
      {
        bg: "#D1E0FF",
        border: "1px solid #000",
        boxShadow: "2px 2px 0px 0px #000",
        idContainer: {
          bg: "#84ADFF",
          border: "1px solid #000",
          boxShadow: "4px 4px 0px 0px #000",
        },
        title: "Passive approach Lorem ipsum4",
        titleColor: "#000",
        lists: [
          {
            text: "Comprehensive web search",
            textColor: "#000",
            bg: "#fff",
          },
          {
            text: "Academic & grey literature systemic review",
            textColor: "#000",
            bg: "#fff",
          },
        ],
      },
      {
        bg: "#D1E0FF",
        border: "1px solid #000",
        boxShadow: "2px 2px 0px 0px #000",
        idContainer: {
          bg: "#84ADFF",
          border: "1px solid #000",
          boxShadow: "4px 4px 0px 0px #000",
        },
        title: "Passive approach Lorem ipsum5",
        titleColor: "#000",
        lists: [
          {
            text: "Comprehensive web search",
            textColor: "#000",
            bg: "#fff",
          },
          {
            text: "Academic & grey literature systemic review",
            textColor: "#000",
            bg: "#fff",
          },
        ],
      },
      {
        bg: "#D1E0FF",
        border: "1px solid #000",
        boxShadow: "2px 2px 0px 0px #000",
        idContainer: {
          bg: "#84ADFF",
          border: "1px solid #000",
          boxShadow: "4px 4px 0px 0px #000",
        },
        title: "Passive approach Lorem ipsum6",
        titleColor: "#000",
        lists: [
          {
            text: "Comprehensive web search",
            textColor: "#000",
            bg: "#fff",
          },
          {
            text: "Academic & grey literature systemic review",
            textColor: "#000",
            bg: "#fff",
          },
        ],
      },
    ],
  });

  return (
    <>
      <div
        style={{
          "--mainBg": allData.mainBg,

          fontFamily: allData.fontFamily,
        }}
      >
        <MainComponent {...allData} />
      </div>
    </>
  );
}

export default App;
