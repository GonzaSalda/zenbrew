import Image from "next/image";

const MenuItem = ({ item }) => {
  const { imgSrc, name, description, price } = item;
  return (
    <div className="flex items-center gap-4">
      {/* Img */}
      <div className="relative w-[60px] h-[60px] xl:w-[72px] xl:h-[72px] rounded-full">
        <Image
          src={imgSrc}
          fill
          priority
          quality={100}
          alt={name}
          className="object-cover"
        />
      </div>
      {/* Text */}
      <div className="flex flex-col flex-1 gap-2">
        <div className="flex justify-between gap-4 items-baseline">
          {/* Name */}
          <p className="uppercase font-primary font-semibold text-[22px] leading-none text-primary">
            {name}
          </p>
          {/* Border */}
          <div className="flex-1 border-b border-dashed border-primary"></div>
          {/* Price */}
          <p className="leading-none font-primary font-semibold text-[30px] text-primary">
            {price.toFixed(2)}
          </p>
        </div>
        {/* Description */}
        <p>{description}</p>
      </div>
    </div>
  );
};

export default MenuItem;
