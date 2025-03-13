import { SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@radix-ui/react-select";
import { Select } from "../ui/select";

export function HandleBackground() {
  return (
    <section className="flex flex-col gap-2 mt-4">
      <label htmlFor="bgColorType" className="flex items-center justify-between">
        Fill type
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="LinearGradient">Linear</SelectItem>
              <SelectItem value="LinearGradient">Radial</SelectItem>
              <SelectItem value="LinearGradient">Solid</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </label>
      <label className="flex items-center justify-between">
      
      </label>
      <label htmlFor="bgColorType"></label>
      <label htmlFor="bgColorType"></label>
      <label htmlFor="bgColorType"></label>
    </section>
  )
}