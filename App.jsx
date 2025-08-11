import { css, keyframes } from "@pandacss/react"
import React, { StrictMode } from "react"
import { createRoot } from "react-dom/client"

const rotar = keyframes({
  "0%": { "--deg": "0deg" },
  "100%": { "--deg": "360deg" }
})

const bodyStyle = css({
  h: "100vh",
  w: "100%",
  display: "flex",
  flexWrap: "wrap",
  placeContent: "center",
  overflow: "hidden",
  animation: `${rotar} 120s linear infinite alternate both`,
  fontFamily:
    "Verdana, Geneva, Tahoma, sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue'",
  backgroundImage: `
    repeating-conic-gradient(from var(--deg) at 25% 25%, var(--primary-color) 0 1deg, transparent 2deg 3deg),
    repeating-conic-gradient(from var(--deg) at 50% 25%, var(--secondary-color) 0 1deg, transparent 2deg 3deg),
    repeating-conic-gradient(from var(--deg) at 75% 25%, var(--secondary-color) 0 1deg, transparent 2deg 3deg),
    repeating-conic-gradient(from var(--deg) at 75% 75%, var(--secondary-color) 0 1deg, transparent 2deg 3deg),
    repeating-conic-gradient(from var(--deg) at 50% 75%, var(--secondary-color) 0 1deg, transparent 2deg 3deg),
    repeating-conic-gradient(from var(--deg) at 25% 75%, var(--secondary-color) 0 1deg, transparent 2deg 3deg)
  `
})

function App() {
  return (
    <div
      className={bodyStyle}
      style={{
        "--primary-color": "mistyrose",
        "--secondary-color": "mediumturquoise"
      }}
    ></div>
  )
}

const rootDiv = document.createElement("div")
document.body.appendChild(rootDiv)
createRoot(rootDiv).render(
  <StrictMode>
    <App />
  </StrictMode>
)
