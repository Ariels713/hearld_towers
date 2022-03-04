import React from "react"
import Image from "next/image"
import hearld3 from "../../public/assets/hearld3.jpg"
import hearld4 from "../../public/assets/hearld4.jpg"
import hearld5 from "../../public/assets/hearld5.jpg"
import hearld6 from "../../public/assets/hearld6.jpg"
import hearld7 from "../../public/assets/hearld7.jpg"
import hearld8 from "../../public/assets/hearld8.jpg"
function ImageGallery() {
  return (
    <>
      <div className="container mx-auto">
        <div className="grid-cols-3 p-20 space-y-2 white lg:space-y-0 lg:grid lg:gap-3 lg:grid-rows-3">
          <div className="w-full rounded">
            <Image src={hearld3} alt="Launge Room at Hearld" />
          </div>
          <div className="w-full col-span-2 row-span-2 rounded ">
            <Image
              className="object-center object-cover "
              src={hearld4}
              alt="Launge Room at Hearld"
              height="700"
            />
          </div>
          <div className="w-full rounded">
            <Image src={hearld5} alt="Launge Room at Hearld" />
          </div>
          <div className="w-full rounded">
            <Image src={hearld6} alt="Launge Room at Hearld" />
          </div>
          <div className="w-full rounded">
            <Image src={hearld7} alt="Launge Room at Hearld" />
          </div>
          <div className="w-full rounded">
            <Image src={hearld8} alt="Launge Room at Hearld" />
          </div>
        </div>
      </div>
    </>
  )
}

export default ImageGallery
