import {createLazyFileRoute} from "@tanstack/react-router";

import "../styles/home.css";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <section className="flex align-center justify-center w-full h-full p-2">
      <div className="text-center">
        <h3 className="home-title">主要展示一些CSS效果</h3>

        <p>将使用一些最新的CSS特性</p>
        <p>例如：原生 css 规则嵌套、@property 等</p>
      </div>
    </section>
  );
}
