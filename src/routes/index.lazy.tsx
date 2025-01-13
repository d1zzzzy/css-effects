import {createLazyFileRoute} from "@tanstack/react-router";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <section className="flex align-center justify-center w-full h-full p-2">
      <div className="text-center">
        <h3>主要展示一些纯CSS效果</h3>

        <p>全站效果将使用一些最新的CSS特性</p>
        <p>例如：基础的原生 css 规则嵌套</p>
      </div>
    </section>
  );
}
