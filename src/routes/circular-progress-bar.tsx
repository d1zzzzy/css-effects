import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import styles from "../styles/circular-progress-bar.module.css";

export const Route = createFileRoute("/circular-progress-bar")({
  component: RouteComponent,
});

function RouteComponent() {
  const [progress, setProgress] = useState<number>(30);
  return (
    <section className="page flex flex-column align-center justify-center w-full h-full">
      <div className={styles.content}>
        <div
          className={styles.circularProgressBar}
          // @ts-expect-error custom-props
          style={{ "--progress": progress }}
        />

        <input
          type="range"
          min="0"
          max="100"
          value={progress}
          onChange={(e) => setProgress(Number(e.target.value))}
        />
      </div>
      <p className="mt-20">
        使用了css新特性嵌套样式功能(虽然scss之类的已经提供了，但是现在原生也支持了)
      </p>
      <p>环形进度条主要使用新属性 conic-gradient 实现!</p>
    </section>
  );
}
