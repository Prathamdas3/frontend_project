'use client'
import { useState } from 'react';
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import Image from 'next/image';
import { useTheme } from 'next-themes';


export default function Home() {
  const {setTheme,theme}=useTheme()
  const [pageviews, setPageviews] = useState<number>(100)
  const [yearlyBilling, setYearlyBilling] = useState<boolean>(false)
  const calculatePrice = () => {
    let price = (pageviews / 100) * 16
    if (yearlyBilling) {
      price *= 0.75
    }
    return price.toFixed(2)
  }

  const toggleTheme=()=>{
    if(theme==='light'){
      setTheme('dark')
    }else{
      setTheme('light')
    }
  }

  return (
    <main className=" min-h-screen font-manrope relative">
    <section className="grid grid-rows-2 min-h-screen dark:bg-dark_price_component_background">
      <div className=" flex flex-col items-center justify-center gap-y-5 bg-top-pattern bg-no-repeat bg-center bg-main_background dark:bg-dark_main_background rounded-bl-[8rem] lg:rounded-bl-[15rem] ">
        <h2 className=" font-extrabold text-center text-xl lg:text-3xl mt-16 dark:text-white">Simple, traffic-based pricing</h2>
        <p className=" text-text_text dark:text-dark_text_text text-center text-sm lg:text-base ">Sign-up for our 30-day trial.<br className='lg:hidden'/> No credit card required.</p>
        <p className='text-sm text-text_text -ml-3 dark:text-dark_text_text cursor-pointer' onClick={toggleTheme}>{theme==='light'?'Dark Mode':'LightMode'}</p>
      </div>


      <div className=" flex justify-center items-center bg-price_component_background dark:bg-dark_price_component_background">
        <div className="h-[55%] shadow-lg dark:shadow-lg grid grid-row-2 rounded-xl w-[90%] md:w-1/2 md-plus:w-[44%] md:h-[55%] lg-plus:w-[33%]  ll-plus:w-[30%] lg-plus:h-[50%] xl-plus:h-[45%] border-2 border-gray-50 dark:border-gray-700 absolute  bottom-[3rem] md:bottom-[2.6rem] lg:bottom-10 lg-plus:bottom-20  ll-plus:bottom-28 xl:bottom-40 bg-price_component_background dark:bg-dark_price_component_background">
        <div className='lg:px-10 flex flex-col itmes-center justify-center gap-10 lg-plus:space-y-10'>
          <div className="text-text_text text-sm flex flex-col lg:flex-row items-center justify-between gap-y-7 lg:gap-y-0 
        dark:text-dark_text_text">
            <h4 className='mt-4 lg:mt-0 '>{pageviews}k PAGEVIEWS</h4>
            <Slider value={[pageviews]}
            onValueChange={(value) => setPageviews(value[0])}
            max={200}
            step={1}
            className="w-[90%] lg:hidden  " />
            <h4 ><span className="text-3xl font-extrabold text-black dark:text-white">${calculatePrice()}</span> / month</h4>
          </div>
          <div className='hidden lg:block'>
          <Slider value={[pageviews]}
            onValueChange={(value) => setPageviews(value[0])}
            max={200}
            step={1}
            className="w-full" />
            </div>
          <div className="text-xs flex items-center text-text_text justify-center mb-6 lg:mb-0 dark:text-dark_text_text">
            <span className=" mr-2 text-nowrap">Monthly Billing</span>
            <Switch
              checked={yearlyBilling}
              onCheckedChange={setYearlyBilling}
              className=''
            />
            <span className="ml-2 text-nowrap ">Yearly Billing</span>
            <span className="text-nowrap font-bold lg:block hidden ml-2 text-xs dark:bg-dark_discount_background dark:text-dark_discount_text bg-discount_background text-discount_text px-2 py-1 rounded-full">25% discount</span>
           
            <span className="lg:hidden block ml-2 tracking-tighter dark:bg-dark_discount_background dark:text-dark_discount_text bg-discount_background text-discount_text px-2 py-0.5 rounded-full text-[10px] font-bold">
              -25%
            </span>
          </div>
          </div>
          <div className=' flex flex-col lg:flex-row itmes-center justify-around border-t-[1px] dark:border-gray-700 '>
            <div className=" flex items-center justify-center mt-4 lg:mt-0">
            <ul className='text-text_text space-y-2 dark:text-dark_text_text'>
              <li className='flex items-center gap-2 '><Image src='/icon-check.svg' alt='check sign' width={9} height={8} /> <span>Unlimitd websites</span> </li>
              <li className='flex items-center -ml-5 lg:-ml-0 gap-2 '><Image src='/icon-check.svg' alt='check sign' width={9} height={8} /> <span>100% data ownership</span> </li>
              <li className='flex items-center gap-2 ml-4 lg:ml-0'><Image src='/icon-check.svg' alt='check sign' width={9} height={8} /> <span>Email reports</span> </li>
            </ul>
            </div>
            <div className='flex items-center justify-center mt-5 lg:mt-0 lg:mb-0 mb-6'>
            <button className='bg-text_cta_background font-bold text-CTA  py-3 px-9 tracking-wide rounded-full dark:bg-dark_text_cta_background dark:text-dark_CTA'>
              Start my trial
            </button>
            </div>
          </div>
        </div>
      </div>
      <div>
      </div>
    </section>
  </main>
  );
}
