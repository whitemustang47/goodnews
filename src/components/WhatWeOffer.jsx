import sideImage from "/assets/WhatWeOffer/side_image.jpg"

function WhatWeOffer() {
  return (
    <div className="h-[80vh] w-full py-20 flex flex-col justify-center items-center gap-10">
      <div className="flex justify-center items-center text-4xl font-bold">
        <h2>What we offer</h2>
      </div>
      <div className="h-full w-full flex flex-row justify-center items-center">
        <div className="h-full w-full p-20 flex justify-center items-center">
          <p>
            Our company provides a wide range of products and services to meet
            the needs of our customers. We offer high-quality products at
            competitive prices, including cutting-edge technology, durable
            goods, and luxury items. Our services include fast and reliable
            shipping, hassle-free returns, and personalized customer support. We
            also provide customized solutions for businesses and individuals,
            from project management to marketing strategies. Our commitment to
            excellence and customer satisfaction is reflected in our strong
            reputation and loyal customer base.
          </p>
        </div>
        <div className="h-full w-full p-20 flex justify-center items-center">
          <img src={sideImage} className="h-full w-full" />
        </div>
      </div>
    </div>
  )
}

export default WhatWeOffer
