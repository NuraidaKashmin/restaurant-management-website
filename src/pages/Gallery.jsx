import bgThree from '../assets/bgThree.jpg'
import one from '../assets/1.jpg'
import two from '../assets/2.jpg'
import three from '../assets/3.jpg'
import four from '../assets/4.jpg'
import five from '../assets/5.jpg'
import six from '../assets/6.jpg'
import seven from '../assets/7.jpg'
import eight from '../assets/8.jpg'
import nine from '../assets/9.jpg'
import ten from '../assets/10.jpg'
import { useState } from 'react'
import Lightbox from 'yet-another-react-lightbox'
const Gallery = () => {
    const [open, setOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState(null);
    const images = [
        { src: one, name: "Cozy Corners", description: "A warm and inviting seating area.", width: 600, height: 600 },
        { src: two, name: "Elegant Dining", description: "A fine dining experience with style.", width: 600, height: 600 },
        { src: three, name: "Cozy Corners", description: "A warm and inviting seating area.", width: 600, height: 600 },
        { src: four, name: "Elegant Dining", description: "A fine dining experience with style.", width: 600, height: 600 },
        { src: five, name: "Vegan Bliss", description: "A fresh and healthy vegan platter.", width: 600, height: 600 },
        { src: six, name: "Savory Feast", description: "A fresh and healthy vegan platter.", width: 600, height: 600 },
        { src: seven, name: "Vegan Bliss", description: "A fresh and healthy vegan platter.", width: 600, height: 600 },
        { src: eight, name: "Savory Feast", description: "A hearty meal with all your favorites.", width: 600, height: 600 },
        { src: nine, name: "Savory Feast", description: "A hearty meal with all your favorites.", width: 600, height: 600 },
        { src: ten, name: "Vegan Bliss", description: "A fresh and healthy vegan platter." },
    ]

    const openLightbox = (index) => {
        setCurrentImage(index);
        setOpen(true);
    };



    return (

        <div>
            <div className="text-white py-8 text-center" style={{ backgroundImage: `url(${bgThree})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
                <h1 className="text-4xl font-semibold">Gallery</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 px-8 py-4">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className="relative group cursor-pointer"
                        onClick={() => openLightbox(index)}
                    >
                        <img
                            src={image.src}
                            alt={image.name}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300">
                            <div className="absolute bottom-0 left-0 p-4 text-white">
                                <h3 className="font-bold text-xl">{image.name}</h3>
                                <p className="text-lg">{image.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <Lightbox
                open={open}
                close={() => setOpen(false)}
                index={currentImage}
                slides={images.map((image) => ({
                    src: image.src,
                    alt: image.name,
                    title: image.name,
                    width: image.width,
                    height: image.height,
                }))}
            />
        </div>
    );
};

export default Gallery;