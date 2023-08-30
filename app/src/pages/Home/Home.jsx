import { Link } from 'react-router-dom'
import './home.scss'

const Home = () => {
    return (
        <div id='home'>
            <div className="pt-32 w-[327px] mx-auto text-center 
                            sm:pt-40 sm:w-[450px]
                            lg:pt-64 lg:px-32 lg:w-full lg:flex lg:text-left lg:justify-between
                            xl:pt-72 xl:px-60">
                <div className="lg:w-[450px]">
                    <h5 className='heading5'>SO, YOU WANT TO TRAVEL TO</h5>
                    <h1 className='heading1'>SPACE</h1>
                    <p className='bodytext'>Let’s face it; if you want to go to space, you might as well genuinely go to 
                    outer space and not hover kind of on the edge of it. Well sit back, and relax 
                    because we’ll give you a truly out of this world experience!</p>
                </div>

                <button className='mt-16 w-[150px] h-[150px] bg-primary rounded-full font-font1 text-xl pt-1 overflow-hidden
                                   sm:mt-28 sm:w-[242px] sm:h-[242px] sm:text-4xl
                                   lg:hover:shadow-[0_0_0_50px_rgba(151,151,151,0.5)]'>
                    <Link to='/destination' className='flex justify-center items-center h-full w-full'>EXPLORE</Link>
                </button>
            </div>
        </div>
    );
};

export default Home;
