import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
export default function AirCraftIdentity() {
  return (
    <Card className="w-full my-4 !py-0 !gap-0">
      <CardHeader className="bg-blue-50 px-4 py-4">
        <CardTitle className="font-bold flex items-center gap-2 text-2xl">
          <IoIosFingerPrint /> AIRCRAFT IDENTITY
        </CardTitle>
      </CardHeader>
      <CardFooter>
        <div className="w-full">
          <CardContent className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5'>
            <Field>
                <FieldLabel htmlFor="max-speed" className='text-xl font-medium'>MAX SPEED (KNOTS)</FieldLabel>
              <Input placeholder="520" required className="w-full text-xl font-medium p-2" />
            </Field>
            <Field>
                 <FieldLabel htmlFor="max-speed" className='text-xl font-medium'>MAX SPEED (KNOTS)</FieldLabel>
                            <Input placeholder="520" required className="w-full text-xl font-medium p-2" />
            </Field>
            <Field>
                 <FieldLabel htmlFor="max-speed" className='text-xl font-medium'>MAX SPEED (KNOTS)</FieldLabel>
              <Input placeholder="520" required className="w-full text-xl font-medium p-2" />
            </Field>
            <Field>
                 <FieldLabel htmlFor="max-speed" className='text-xl font-medium'>MAX SPEED (KNOTS)</FieldLabel>
              <Input placeholder="520" required className="w-full text-xl font-medium p-2" />
            </Field>
          </CardContent>
        </div>
      </CardFooter>
    </Card>
  );
}
