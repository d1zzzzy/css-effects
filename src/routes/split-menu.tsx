import { createFileRoute } from '@tanstack/react-router'

import "../styles/split-menu.css";

export const Route = createFileRoute('/split-menu')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <article className="split-menu">
        <ul>
            <li>
                <a href="#" data-text="home">Home</a>
            </li>
            <li>
                <a href="#" data-text="photos">Photos</a>
            </li>
            <li>
                <a href="#" data-text="articles">Articles</a>
            </li>
            <li>
                <a href="#" data-text="timeline">Timeline</a>
            </li>
            <li>
                <a href="#" data-text="contact">Contact</a>
            </li>
        </ul>
    </article>
  )
}
