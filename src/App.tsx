import { Certification } from "./components/Certification"
import { Education } from "./components/Education"
import { Intro } from "./components/Intro"
import { Projects } from "./components/Projects"
import { Work } from "./components/Work"

function App() {
  return (
    <>
      <Intro />
      <Work />
      <Projects />
      <Education />
      <Certification />
    </>
  )
}

export default App
