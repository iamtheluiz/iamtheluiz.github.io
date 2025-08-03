import { Certification } from "./components/Certification"
import { Education } from "./components/Education"
import { Intro } from "./components/Intro"
import { Projects } from "./components/Projects"
import { Work } from "./components/Work"

function App() {
  return (
    <main id="main-content" role="main">
      <Intro />
      <Work />
      <Projects />
      <Education />
      <Certification />
    </main>
  )
}

export default App
