import p1 from "/assets/Gallery/1.jpg"
import p2 from "/assets/Gallery/2.jpg"
import p3 from "/assets/Gallery/3.jpg"
import p4 from "/assets/Gallery/4.jpg"
import p5 from "/assets/Gallery/5.jpg"

function Gallery() {
  return (
    <div className="min-h-[60vh] w-full py-20 flex flex-col justify-center items-center gap-10">
      <div className="flex justify-center items-center text-4xl font-bold">
        <h3>Gallery</h3>
      </div>
      <div className="px-8 flex flex-col justify-center items-center gap-2">
        <div className="h-72">
          <img src={p2} alt="p2" className="h-full" />
        </div>
        <div className="md:w-96 flex flex-row gap-2">
          <div>
            <img src={p1} alt="p1" className="w-full" />
          </div>
          <div>
            <img src={p4} alt="p4" className="w-full" />
          </div>
        </div>
        <div className="h-72">
          <img src={p3} alt="p3" className="h-full" />
        </div>
        <div className="h-72">
          <img src={p5} alt="p5" className="h-full" />
        </div>
      </div>
    </div>
  )
}

export default Gallery
