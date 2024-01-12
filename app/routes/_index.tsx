import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div>
      <h1 className="font-playfair text-2xl text-slate-800">Hello, world!</h1>
      <p className="text-slate-700">
        Adipisicing voluptate anim consectetur adipisicing. Laboris deserunt
        ipsum nulla ullamco dolor nulla excepteur aliqua deserunt do irure
        laborum non fugiat. Sit eu est deserunt qui cupidatat. Exercitation
        aliqua non voluptate aute irure ex do duis amet veniam culpa. Labore et
        in est ipsum anim cillum reprehenderit non est cillum.
      </p>
    </div>
  );
}
