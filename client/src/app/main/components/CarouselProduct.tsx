import Carousel from "react-multi-carousel";
export default function CarouselProuduct() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <div className="w-full flex justify-center">
      <Carousel
        swipeable={true}
        arrows={false}
        showDots={true}
        responsive={responsive}
        ssr={true}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={1000}
        transitionDuration={500}
        containerClass="carousel-container"
        deviceType={"mobile"}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        className="h-[114px] w-[364px]"
      >
        <img
          src={"/images/carousel/img-banner.png"}
          alt="배너 이미지"
          className="w-full object-contain"
        />
        <img
          src={"/images/carousel/img-banner.png"}
          alt="배너 이미지"
          className="w-full object-contain"
        />
        <img
          src={"/images/carousel/img-banner.png"}
          alt="배너 이미지"
          className="w-full object-contain"
        />
      </Carousel>
    </div>
  );
}
