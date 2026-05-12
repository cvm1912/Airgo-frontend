import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MdFileCopy } from "react-icons/md";
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
export default function LogisticsStatusSection() {
  return (
    <Card className="w-full my-4 mt-10 !py-0 !gap-0">
      <CardHeader className="bg-blue-50 px-4 py-4">
        <CardTitle className="font-bold flex items-center gap-2 text-2xl">
          <MdFileCopy />AIRCRAFT IDENTITY
        </CardTitle>
      </CardHeader>
      <CardFooter>
        <div className="w-full">
          <CardContent className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5'>
            <Field>
                <FieldLabel htmlFor="max-speed" className='text-xl font-semibold text-[#44474D]'>OPERATIONAL STATUS</FieldLabel>
              <Input placeholder="520" required className="w-full text-xl font-medium p-2" />
            </Field>
            <Field>
              <FieldLabel htmlFor="max-speed" className='text-xl font-semibold text-[#44474D]'>AIRLINE IDENTIFIER (UUID)</FieldLabel>
              <Input placeholder="AC-FLEET-992084-B" required className="w-full text-xl font-medium p-2" />
            </Field>
            <Field>
                <FieldLabel htmlFor="max-speed" className='text-xl font-semibold text-[#44474D]'>MANUFACTURER YEAR</FieldLabel>
              <Input placeholder="2024" required className="w-full text-xl font-medium p-2" />
            </Field>
            <Field>
           <FieldLabel htmlFor="max-speed" className='text-xl font-semibold text-[#44474D]'>LAST MANTANANCE DATE</FieldLabel>
              <Input placeholder="dd-mm-yyyy" required className="w-full text-xl font-medium p-2" />
            </Field>
          </CardContent>
        </div>
      </CardFooter>
    </Card>
  );
}
