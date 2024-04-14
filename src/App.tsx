import { FormSelect, FormTextField, FormSwitch } from "@/components/ui";
import { FormProvider, useForm, useWatch } from "react-hook-form";

interface Person {
  name: string;
  age?: number;
  gender?: "M" | "F";
  handsome: boolean;
}

export default function App() {
  const form = useForm<Person>({
    defaultValues: {
      name: "",
      age: undefined,
      gender: undefined,
      handsome: true,
    },
  });

  const name = useWatch({
    name: "name",
    control: form.control,
  });
  const gender = useWatch({
    name: "gender",
    control: form.control,
  });
  const handsome = useWatch({
    name: "handsome",
    control: form.control,
  });

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <FormProvider {...form}>
        <FormTextField<Person> name="name" />
        <FormSelect<Person, string>
          name="gender"
          options={[
            { label: "Male", value: "M" },
            { label: "Female", value: "F" },
          ]}
        />
        <FormSwitch<Person> name="handsome" />
      </FormProvider>
      <div>{name}</div>
      <div>{gender}</div>
      <div>{handsome ? "You are handsome" : "You are not handsome"}</div>
    </div>
  );
}
