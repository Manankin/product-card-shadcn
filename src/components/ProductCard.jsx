import * as React from "react";
import { clsx } from "clsx"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { Button } from "@/components/ui/button"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const oneProduct = {
  images: [
    { id: 1, src: 'https://era-in-ear.com/wp-content/uploads/2023/03/Beosound_A1_Natural__hero_1.png' },
    { id: 2, src: 'https://era-in-ear.com/wp-content/uploads/2023/03/A1_Anthracite_Ortho_300DPI.png' },
    { id: 4, src: 'https://era-in-ear.com/wp-content/uploads/2023/03/Beosound_a1_4_black.png' },
    { id: 5, src: 'https://era-in-ear.com/wp-content/uploads/2023/03/Beosound_a1_black_2.png' },
    { id: 6, src: 'https://era-in-ear.com/wp-content/uploads/2023/03/PS_A1-2ndGen_pink_Bottom.png' },
  ],
  colors: [
    { id: '1', code: '#808080' },
    { id: '2', code: '#008000' },
    { id: '3', code: '#d3d3d3' },
    { id: '4', code: '#ffe4c4' },
    { id: '5', code: '#9370d8' },
    { id: '6', code: '#4d4747' },
    { id: '7', code: '#faac67' },
  ],
  price: {
    min: '210.00',
    max: '250.00'
  },
}

export default function ProductCard() {
  const { images, colors, price } = oneProduct;

  const [currentImage, setCurrentImage] = React.useState(images[0]);
  const [isColor, setIsColor] = React.useState({});
  const [isFavorite, setIsFavorite] = React.useState(false);
  const [isInCart, setIsInCart] = React.useState(false);
  const [amount, setAmount] = React.useState(0);

  function increment() {
    return setAmount(amount + 1);
  }

  function decrement() {
    if (amount === 0) {
      return;
    }

    return setAmount(amount - 1);
  }

  return (
    <div className="flex gap-x-2">
      <div className="w-1/2">
        <div className="flex flex-col h-fit items-center justify-center ">
          <div className="rounded-lg w-full h-96 relative object-center bg-slate-300">
            <img src={currentImage.src} alt="speakers" className="h-96 block my-0 mx-auto" />
          </div>
          <Carousel className="w-full max-w-lg">
            <CarouselContent className="-ml-1 flex gap-x-1">
              {Array.from(images).map((item) => (
                <CarouselItem key={item.id} className="pl-0.5 basis-1/5">
                  <div className="">
                    <img src={item.src} className="w-full h-full block center" onClick={() => setCurrentImage(item)} />
                    {/* <Card>
                      <CardContent className="flex items-center justify-center">
                        <img src={_.src} className="w-full h-full" onClick={() => setCurrentImage(_)}/>
                      </CardContent>
                    </Card> */}
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="p-0 m-0" />
            <CarouselNext className="p-0 m-0" />
          </Carousel>
        </div>
      </div>

      <div className="w-1/2 flex flex-col px-6 py-3 gap-y-6">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Bang & Olufsen BeoPlay A1 2nd Gen Portable Speaker
        </h1>

        <div className="flex gap-x-4">
          {colors.map((color) => (
            <span className={clsx(
              'block w-6 h-6 rounded-full',
              `bg-${color.id}`,
              { 'outline-1 outline-gray-300 outline outline-offset-2': isColor.id === color.id }
            )}
              key={color.id}
              onClick={() => setIsColor(color)}
              style={{ backgroundColor: color.code }}
            >
            </span>
          ))}
        </div>

        <div className="flex justify-between items-center">
          <p className="text-lg font-bold ">${price.min}-{price.max}</p>
          <div className="flex gap-x-4">
            <span
              className={clsx(
                'w-10 h-10 block border border-solid border-gray-500 rounded icon-block',
                { 'is-choose': isInCart },
                { 'not-choose': !isInCart })}
              onClick={() => setIsInCart(!isInCart)}
            >
            </span>
            <span
              className={clsx(
                'w-10 h-10 block border border-solid border-gray-500 rounded icon-block',
                { 'is-favorite': isFavorite },
                { 'not-favorite': !isFavorite })}
              onClick={() => setIsFavorite(!isFavorite)}
            >
            </span>
          </div>
        </div>

        <div className="flex gap-x-3">
          <Select >
            <SelectTrigger className="">
              <SelectValue placeholder="Size" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {/* <SelectLabel>Fruits</SelectLabel> */}
                <SelectItem value="small">Small (3.5")</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="large">Medium Box</SelectItem>
                <SelectItem value="extra-large">Large Box</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>

          <Select >
            <SelectTrigger className="">
              <SelectValue placeholder="Color" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {/* <SelectLabel>Fruits</SelectLabel> */}
                <SelectItem value="gray">Gray</SelectItem>
                <SelectItem value="purple">Purple</SelectItem>
                <SelectItem value="beige">Beige</SelectItem>
                <SelectItem value="l-gray">Light Gray</SelectItem>
                <SelectItem value="green">Green</SelectItem>
                <SelectItem value="brown">Brown</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Select>
            <SelectTrigger className="">
              <SelectValue placeholder="Shipping information" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="novapost">Nova Post</SelectItem>
                <SelectItem value="ukrpost">Ukr Poshta</SelectItem>
                <SelectItem value="meest">Meest Express</SelectItem>
                <SelectItem value="delivery">Delivery</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className="flex gap-x-3">
          <div className="w-full flex gap-x-2 items-center justify-between">
            <span className="block">Quantity (pieces)</span>
            <div>
              <span
                className="is-clickable border border-gray inline-block place-content-center w-10 h-10 text-center rounded-tl-lg rounded-bl-lg"
                onClick={decrement}
              >
                -
              </span>
              <span className="border border-gray inline-block place-content-center w-12 h-10 text-center ">{amount}</span>
              <span
                className="is-clickable border border-gray inline-block place-content-center w-10 h-10 text-center rounded-tr-lg rounded-br-lg"
                onClick={increment}
              >
                +
              </span>
            </div>
          </div>
          <Button className="w-full">
            Add to cart
          </Button>
        </div>
      </div>
    </div>
  )
}
