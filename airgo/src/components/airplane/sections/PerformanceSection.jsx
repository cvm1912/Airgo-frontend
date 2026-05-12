import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MdSpeed } from "react-icons/md";
import { IoIosFingerPrint } from "react-icons/io";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldTitle,
} from "@/components/ui/field";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
export default function PerformanceSection() {
  return (
    <Card className="w-full my-4 !py-0 !gap-0 h-full">
      <CardHeader className="bg-blue-50 px-4 py-4">
        <CardTitle className="font-bold flex items-center gap-2 text-2xl">
          <MdSpeed />PERFORMANCE SPECS
        </CardTitle>
      </CardHeader>
      <CardFooter>
        <div className="w-full">
          <CardContent className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'>
            <Field >
              <FieldLabel htmlFor="fuel-capacity" className='text-xl font-semibold text-[#44474D]'>FUEL CAPACITY (LITRES)</FieldLabel>
              <Input type="number" placeholder="126000" required className="w-full text-xl font-medium p-2" />
            </Field>
            <Field>
              <FieldLabel htmlFor="max-speed" className='text-xl font-semibold text-[#44474D]'>MAX SPEED (KNOTS)</FieldLabel>
              <Input type="number" placeholder="520" required className="w-full text-xl font-medium p-2" />
            </Field>
            <Field>
            <FieldLabel htmlFor="max-range" className='text-xl font-semibold text-[#44474D]'>MAX RANGE (KM)</FieldLabel>
              <Input type="number" placeholder="14000" required className="w-full text-xl font-medium p-2" />
            </Field>
          </CardContent>
          <div className="px-6 pb-4 mt-4 rounded-4xl">
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvyxsPhF0TRrc-Gjca5v1iwAFoAgnGf9BqctYgL1AZt6jUlbasanXpBlntFYe8Ef_rqOJxWiskxqmVtxbaK7FhDmPdzRSD1TzSGQ-ww4wNs3AR2YAjLLjWrGdhQLmCKL-4BgJl53YeTy5xaHAH5jxVw3jwanye17x--4GyWSeELKXMPjcU8Y95_zhrQtg2LvYSb0wZ9_a2yCizIjL92P8tmU3z2dufKouTrND4yvc-AKoRK1wJO7Wp2yj-Eh4w977FTafRlwLf7IE" alt="aircraft" className="w-full h-40 object-cover rounded bg-blue-900" />
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
