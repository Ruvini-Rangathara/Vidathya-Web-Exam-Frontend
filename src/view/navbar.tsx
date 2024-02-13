const Navbar = () => {
    return (
        <div>
            <div className={' h-[100%] w-[15%] fixed top-0 left-0 z-10 bg-[#F9C6EA] p-4 shadow-md '}>
                <div className={'flex flex-col'}>
                    {/*label and icon*/}
                    <div className={'flex flex-col items-center'}>
                        <img src={'public/instituteLogo2.png'} alt={'vidathya'} className={'w-32 h-20'}/>
                        <label className={'text-[#5A294C] text-center font-bold text-xs'}>Vidathya Higher Education Centre</label>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default Navbar;