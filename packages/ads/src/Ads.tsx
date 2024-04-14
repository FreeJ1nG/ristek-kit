import { useEffect, useState } from "react";
// import { AdsProps } from "./Ads.interfaces";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@ristek-kit/ui";

export default function Ads() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="flex flex-col">
      <Carousel setApi={setApi}>
        <CarouselContent>
          <CarouselItem>1</CarouselItem>
          <CarouselItem>2</CarouselItem>
          <CarouselItem>3</CarouselItem>
          <CarouselItem>4</CarouselItem>
          <CarouselItem>5</CarouselItem>
        </CarouselContent>
      </Carousel>
      <div>
        {current} page of {count}
      </div>
    </div>
  );
}
