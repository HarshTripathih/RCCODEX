import React from 'react'
import Typed from 'react-typed';
// import ImageSlider, { Slide } from "react-auto-image-slider";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import homeproj from '../Gallary/homeproj.PNG';
import homeproj2 from '../Gallary/homeproj2.PNG';

const Home = () => {
    const spanStyle = {  // spam is used for numbering 
        padding: '5px',
        width: '50px',
        background: 'black',
        color: 'white'
    }
    const divStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundSize: 'cover',
        height: '500px',
        borderRadius: '0px'
    }
    const slideImages = [
        {
            url: homeproj,
            // caption: '1'
        },
        {
            url: homeproj2,
            // caption: '2'
        },
    ];

    return (
        <div className='text-black  mx-10 flex flex-row bg-stone-200  mt-20 flex-wrap rounded-2xl'>
            <div className='max-w-[800px] mt-[-96px] w-full h-fit  mx-auto text-center flex flex-col justify-center  '>
                <p className='text-[black] font-bold mt-40 p-4 text-2xl text-left md:text-1xl sm:text-1xl'>
                    We are Developers, are You Looking for Amazing Websites?
                </p>
                <h1 className='md:text-7xl p-6 sm:text-6xl text-4xl font-bold md:py-4 text-left'>
                    Work with us.
                </h1>
                <div className='flex justify-start items-end p-8 py-2'>
                    <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4 text-left'>
                        We
                    </p>
                    <Typed
                        style={{ color: 'blue', border: '1px solid black', borderRadius: '10px', marginLeft: '10px', padding: '12px' }}
                        className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'
                        strings={['DESIGN', 'CREATE']}
                        typeSpeed={120}
                        backSpeed={140}
                        loop
                    />
                </div>
                <div className='flex justify-start items-end py-2 p-8'>

                    <p className='md:text-5xl sm:text-4xl text-xl font-bold  py-4 text-left'>
                        What You
                    </p>
                    <Typed
                        style={{ color: 'red', border: '1px solid black', borderRadius: '10px', marginLeft: '10px', padding: '12px' }}
                        className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'
                        strings={['THINK', 'WANT']}
                        typeSpeed={120}
                        backSpeed={140}
                        loop
                    />
                </div>
                <button className='bg-[black] w-[200px] rounded-md font-medium my-3 mx-auto py-3 text-white ml-8'>Get Started</button>
            </div>
            <div className='max-w-[300px] overflow-auto w-full   flex flex-col  justify-center bg-black rounded-2xl '>

                <Slide>
                        {slideImages.map((slideImage, index) => (
                            <div key={index}>
                                <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
                                    {/* <span style={spanStyle}>{slideImage.caption}</span> */}
                                </div>
                            </div>
                        ))}
                </Slide>
            </div>
        </div>

    )
}
export default Home
