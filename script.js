//* Matter JS Boiler CODE

const {
  Engine,
  Runner,
  Render,
  World,
  Bodies,
  MouseConstraint,
  Mouse,
} = Matter;

//!ENgine tracks changes
//! Render = draw on screen
//! coordinate among World and ENgine
//! Body reference to entire collection on world
const width = 800;
const height = 600;

const engine = Engine.create();
const { world } = engine;
const render = Render.create({
  element: document.body,
  engine: engine,
  options: { width: width, height: height, wireframes: false },
});

Render.run(render);
Runner.run(Runner.create(), engine);

// const shape = Bodies.rectangle(200, 200, 50, 50, {
//   isStatic: true,
// });
// World.add(world, shape);

World.add(
  world,
  MouseConstraint.create(engine, {
    mouse: Mouse.create(render.canvas),
  })
);

//? walls
const walls = [
  Bodies.rectangle(400, 0, 800, 40, {
    isStatic: true,
  }),
  Bodies.rectangle(400, 600, 800, 40, {
    isStatic: true,
  }),
  Bodies.rectangle(0, 300, 40, 600, {
    isStatic: true,
  }),
  Bodies.rectangle(800, 300, 40, 600, {
    isStatic: true,
  }),
];

World.add(world, walls);

//Random Shapes

for (let i = 0; i < 50; i++) {
  if (Math.random() > 0.5) {
    World.add(
      world,
      Bodies.rectangle(Math.random() * width, Math.random() * height, 40, 40)
    );
  } else {
    World.add(
      world,
      Bodies.circle(Math.random() * width, Math.random() * height, 50)
    );
  }
}
