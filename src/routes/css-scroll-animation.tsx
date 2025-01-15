import {createFileRoute} from '@tanstack/react-router';

import "../styles/css-scroll-animation.css";

export const Route = createFileRoute('/css-scroll-animation')({
  component: CssScrollAnimation,
})

const TextsArray: string[] = [
  'calc()',
  'min()',
  'margin-block',
  'pow()',
  '@property',
  '@support',
  '@view-transition',
  'var()',
  'clamp()',
  'view()',
  'CSS',
  '@layer',
  '@keyframes',
  'subgrid',
  'in oklab',
  ':popover-open',
  'abs()',
  'sin()',
  ':has()',
  '::marker',
  '1cap',
  'scrollbar-color',
  'scroll - timeline',
  'view - timeline',
  'overlay',
  'scale',
  'ascent - override',
  'initial - letter',
  'inset',
  '@container',
  'accent - color',
  'color - mix()',
  '@scope',
  '@starting - style',
  'override - colors',
  'anchor()',
  'scroll - snap',
  '::backdrop',
  '::cue',
  ':focus - visible',
  ':user - valid',
  ':fullscreen',
  ':dir()',
  'caret - color',
  'aspect - ratio',
  'cross-fade()',
  'image-set()',
  'env()',
  'place-content',
  'gap',
];

export default function CssScrollAnimation() {
  return (
    <section className="css-scroll-animation relative">
      <section className="grid">
        {
          TextsArray.map(text => (
            <div key={text} className="grid-item">{text}</div>
          ))
        }
      </section>

      <p className="fixed top-0 left-0 right-0 text-center glass-bg">
        使用了一些实验性CSS属性，您的浏览器可能不支持，请参考
        <a target="_blank" href="https://caniuse.com/?search=animation-timeline">AnimationTimeline</a>
      </p>
    </section>
  )
}