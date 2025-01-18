import {createRootRoute, Link, Outlet} from "@tanstack/react-router";

export const Route = createRootRoute({
  component: () => (
    <main className="flex flex-row w-full h-full overflow-hidden">
      <aside className="p-2 flex flex-column gap-2 aside overflow-y-scroll h-m-full">
        <Link to="/" className="[&.active]:font-bold nav-item">
          /
        </Link>
        <Link
          to="/circular-progress-bar"
          className="[&.active]:font-bold nav-item"
        >
          环形进度条
        </Link>
        <Link
          to="/animated-gradient-text"
          className="[&.active]:font-bold nav-item"
        >
          渐变文本动画
        </Link>
        <Link
          to="/css-scroll-animation"
          className="[&.active]:font-bold nav-item"
        >
          CSS滚动视差动画
        </Link>
        <Link
          to="/split-menu"
          className="[&.active]:font-bold nav-item"
        >
          水果忍者菜单
        </Link>
        <Link
          to="/interactive-grid-animation"
          className="[&.active]:font-bold nav-item"
        >
          Grid视觉交互动画
        </Link>
      </aside>

      <section className="relative content flex-1 overflow-y-scroll h-m-full">
        <Outlet/>
      </section>
      {/*<TanStackRouterDevtools />*/}
    </main>
  ),
});
