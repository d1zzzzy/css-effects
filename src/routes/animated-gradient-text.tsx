import {createFileRoute} from '@tanstack/react-router'

import "../styles/animated-gradient-text.css";

export const Route = createFileRoute('/animated-gradient-text')({
  component: AnimatedGradientText,
})

function AnimatedGradientText() {
  return (
    <section className="animated-gradient-text">
      <h1>Animated Gradient Text Effect</h1>
      <p>Implement by:</p>
      <p>@property + linear-gradient() + background-clip + text-fill-color</p>
    </section>
  )
}
