import './index.css'

function Footer(){
    return(
        <footer className="w-screen bg-[#efefef] pt-[4rem] h-[21rem]">
            <div className="w-[60%] flex justify-between mx-auto my-0">
                <div className="flex flex-col items-center hover:-translate-y-3.5 duration-200 hover:transition hover:ease-in-out">
                    <img src="blue_ring.svg" alt="" className="w-[18%] mb-[1rem]"/>
                    <p className="font-lydian text-[#387da3] text-[18px] mb-[2rem]">THIS ONE'S ORIGINAL</p>
                    <img src="blue_bottle.webp" alt="" className="bg-clip-content"/>
                </div>
                <div className="flex flex-col items-center hover:-translate-y-3.5 duration-200 hover:transition hover:ease-in-out">
                <img src="pink_ring.svg" alt="" className="w-[18%] mb-[1rem]"/>
                    <p className="font-lydian text-[#df4597] text-[18px] mb-[2rem]">THIS ONE'S COCOA</p>
                    <img src="brown_bottle.webp" alt=""  className="bg-clip-content"/>
                </div>
                <div className="flex flex-col items-center hover:-translate-y-3.5 duration-200 hover:transition hover:ease-in-out">
                    <img src="grey_ring.svg" alt="" className="w-[18%] mb-[1rem]"/>  
                    <p className="font-lydian text-[#4f4f4f] text-[18px] mb-[2rem]">THIS ONE'S SIMPLE</p>
                    <img src="white_bottle.webp" alt=""  className="bg-clip-content"/>
                </div>
               
            
            </div>
        </footer>
    )
}

export default Footer