function Navbar(){
    return(
        <nav className="bg-[#efefef] h-[10rem] w-screen flex items-center justify-center">
            <div className="flex items-center w-[90%] justify-center  text-[#555555]">
                <div className="flex justify-start flex-1 space-x-[2rem] font-rale text-[12px] font-bold">
                    <p>NUT MILKS</p>
                    <p>ABOUT US</p>
                </div>
                <div className="w-[40%] text-center h-[100%]">
                    <p className="h-[100%] pb-[1rem] font-lydian text-[#555555] text-[36px]">FRONKS</p>
                </div>
                <div className="flex items-center flex-1 justify-end space-x-[2rem] font-rale text-[#555555] text-[12px] font-bold">
                    <p>FIND US</p>
                    <p>CONTACT US</p>
                </div>
            </div>
        </nav>
    )
}

export default Navbar