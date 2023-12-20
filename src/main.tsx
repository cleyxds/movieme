import React from "react"
import ReactDOM from "react-dom/client"

import { RecoilRoot } from "recoil"

import { App } from "./App.tsx"

import "react-responsive-carousel/lib/styles/carousel.min.css"
import "./styles/index.css"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </React.StrictMode>
)
