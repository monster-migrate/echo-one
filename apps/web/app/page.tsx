import { Button } from "@workspace/ui/components/button"
import { add } from "@workspace/math/add";
import { subtract } from "@workspace/math/subtract";
import { Input } from "@workspace/ui/components/input";
export default function Page() {
  const a = 2;
  const b = 4;
  return (
    <div className="flex items-center justify-center min-h-svh">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">Hello World From the Web</h1>
        <Button size="sm">{add({ a, b })}</Button>
        <Input />
        <Button size="sm">{subtract({ a, b })}</Button>
      </div>
    </div>
  )
}
