import React from 'react'
import Gallery from './Gallery'

const images = []
for (let i = 1; i <= 105; i++) {
  images.push(`/images/gallery/Photos/jpg/Image${i}.JPG`);
}
for (let i = 106; i <= 114; i++) {
  images.push(`/images/gallery/Photos/heic/Image${i}.HEIC`);
}
for (let i = 115; i <= 122; i++) {
  images.push(`/images/gallery/Photos/png/Image${i}.PNG`);
}
for (let i = 123; i <= 126; i++) {
  images.push(`/images/gallery/Photos/nef/Image${i}.NEF`);
}

const page = () => {
  return (
    <>
      <Gallery images={images}></Gallery>
    </>

  )
}

export default page

