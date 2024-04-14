import "react";

declare module "react" {
  interface ChildrenProps {
    children: ReactNode;
  }
  interface ComponentRefProps<T> {
    componentRef?: Ref<T>;
  }
  interface Option {
    label: ReactNode;
    value: string | number;
  }
}
