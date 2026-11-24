import { useState } from 'react'

const GITHUB = 'https://github.com/Samyuktha1509'

const crafts = [
  {
    id: 'poems',
    name: 'Poems',
    line: 'Short, quiet, and honest.',
    text: 'I write poems that turn small, everyday feelings into images people recognise. I care about rhythm, the pause between lines, and what is left unsaid.',
    tags: ['Free verse', 'Imagery', 'Emotion'],
  },
  {
    id: 'scripts',
    name: 'Scripts',
    line: 'Scenes that move.',
    text: 'I write scripts for short films and videos: clear scenes, natural dialogue, and a story that knows where it is going.',
    tags: ['Short films', 'Dialogue', 'Storyboarding'],
  },
  {
    id: 'video',
    name: 'Videography',
    line: 'Stories in motion.',
    text: 'I shoot and shape video, thinking about framing, pacing and mood from the first idea to the final cut.',
    tags: ['Shooting', 'Editing', 'Mood'],
  },
  {
    id: 'photo',
    name: 'Photography',
    line: 'One frame, one feeling.',
    text: 'I photograph people, places and light, looking for the moment that says the most with the least.',
    tags: ['Portraits', 'Light', 'Composition'],
  },
]

export default function App() {
  const [active, setActive] = useState(crafts[0].id)
  const craft = crafts.find((c) => c.id === active)

  return (
    <>
      <header className="nav">
        <span className="brand">Samyuktha</span>
        <nav>
          <a href="#about">About</a>
          <a href="#craft">Craft</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero">
          <div className="page" aria-label="Screenplay-style introduction">
            <p className="slug">INT. A QUIET ROOM, NIGHT</p>
           <p className="action">
  A curious BCA student exploring technology,
  cybersecurity, and the digital world.
</p>
<p className="cue">SAMYUKTHA</p>
<p className="dialogue">
  I am pursuing BCA with a focus on Cyber Security.
  I am passionate about technology, programming,
  digital safety, and continuous learning.
</p>
            <p className="action blink">
              She looks up. <span className="cursor" aria-hidden="true">|</span>
            </p>
          </div>
          <h1>Sri Samyuktha K</h1>
          <p className="sub">BCA Cyber Security Student</p>
          <div className="cta">
            <a className="btn primary" href="#craft">See what I do</a>
            <a className="btn" href={GITHUB} target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </section>

        <section id="about" className="section">
          <h2>About me</h2>
          <p className="lead">
            I am a creative who works with words and images. I write poems and
            scripts, and I use videography and photography to bring ideas to
            life. Across all of it, I care about telling a story that feels
            true.
          </p>
        </section>

        <section id="craft" className="section">
          <h2>What I create</h2>
          <div className="tabs" role="tablist">
            {crafts.map((c) => (
              <button
                key={c.id}
                role="tab"
                aria-selected={active === c.id}
                className={active === c.id ? 'tab on' : 'tab'}
                onClick={() => setActive(c.id)}
              >
                {c.name}
              </button>
            ))}
          </div>
          <div className="panel" role="tabpanel">
            <h3>{craft.line}</h3>
            <p>{craft.text}</p>
            <ul className="tags">
              {craft.tags.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
        </section>

        <section id="contact" className="section">
          <h2>Let's work together</h2>
          <p className="lead">
            Have a script, a film or a shoot in mind? Find me on GitHub and say
            hello.
          </p>
          <a className="btn primary" href={GITHUB} target="_blank" rel="noreferrer">
            github.com/Samyuktha1509
          </a>
        </section>
      </main>

      <footer>© {new Date().getFullYear()} Sri Samyuktha K</footer>
    </>
  )
}
