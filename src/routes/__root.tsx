import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
  component: () => (
    <main className="flex flex-row w-full h-full">
      <aside className="p-2 flex flex-column gap-2 aside">
        <Link to="/" className="[&.active]:font-bold nav-item">
          Home
        </Link>
        <Link
          to="/circular-progress-bar"
          className="[&.active]:font-bold nav-item"
        >
          环形进度条
        </Link>
      </aside>

      <section className="content flex-1">
        <Outlet />
      </section>
      <TanStackRouterDevtools />
    </main>
  ),
});
