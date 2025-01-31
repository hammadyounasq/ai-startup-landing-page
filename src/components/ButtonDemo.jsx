import { Button } from "../components/ui/button";

export function ButtonDemo() {
  return (
    <div className="flex flex-col gap-4">
      {/* Default button */}
      <Button>Default Button</Button>

      {/* Large primary button */}
      <Button size="lg">Start free trial</Button>

      {/* Outline variant */}
      <Button variant="outline">View demo</Button>

      {/* Ghost variant */}
      <Button variant="ghost">Learn more</Button>

      {/* Small button */}
      <Button size="sm">Small button</Button>

      {/* Disabled state */}
      <Button disabled>Disabled</Button>
    </div>
  );
}
