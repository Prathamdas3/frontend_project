'use client'
import { useState } from 'react';
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import Image from 'next/image';

export default function Home() {
  const [pageviews, setPageviews] = useState<number>(100)
  const [yearlyBilling, setYearlyBilling] = useState<boolean>(false)
  const calculatePrice = () => {
    let price = (pageviews / 100) * 16
    if (yearlyBilling) {
      price *= 0.75
    }
    return price.toFixed(2)
  }
  return (
    <main className=" min-h-screen font-manrope relative">
      <section className="grid grid-rows-2 min-h-screen ">
        <div className=" flex flex-col items-center justify-center gap-y-5 bg-top-pattern bg-no-repeat bg-center bg-main_background rounded-bl-[8rem] md:rounded-bl-[15rem] ">
          <h2 className=" font-extrabold text-center text-xl md:text-3xl">Simple, traffic-based pricing</h2>
          <p className=" text-text_text text-center text-sm md:text-base ">Sign-up for our 30-day trial.<br className='md:hidden'/> No credit card required.</p>
          {/* <h3 className="text-text_text">Toggle Dark Mode</h3> */}
        </div>
        <div className=" flex justify-center items-center bg-price_component_background ">
          <div className=" shadow-lg grid grid-row-2 rounded-lg w-4/5 h-3/5 md:w-[28%] md:h-[45%] border-2 border-gray-50 absolute bottom-5 md:bottom-40 bg-price_component_background">
          <div className='px-10  flex flex-col itmes-center justify-center gap-y-10'>
            <div className="text-text_text text-sm flex items-center justify-between">
              <h4>{pageviews}k PAGEVIEWS</h4>
              <h4 ><span className="text-3xl font-extrabold text-black">${calculatePrice()}</span> / month</h4>
            </div>
            <Slider value={[pageviews]}
              onValueChange={(value) => setPageviews(value[0])}
              max={200}
              step={1}
              className="w-full" />
            <div className="flex items-center text-text_text justify-center mb-6">
              <span className="text-sm mr-2">Monthly Billing</span>
              <Switch
                checked={yearlyBilling}
                onCheckedChange={setYearlyBilling}
              />
              <span className="text-sm  ml-2">Yearly Billing</span>
              <span className="ml-2 text-xs bg-discount_background text-discount_text px-2 py-1 rounded-full">25% discount</span>
            </div>
            </div>
            <div className='flex itmes-center justify-around border-t-[1px] '>
              <div className="flex items-center justify-center">
              <ul className='text-text_text'>
                <li className='flex items-center gap-2'><Image src='/icon-check.svg' alt='check sign' width={9} height={8} /> <span>Unlimitd websites</span> </li>
                <li className='flex items-center gap-2'><Image src='/icon-check.svg' alt='check sign' width={9} height={8} /> <span>100% data ownership</span> </li>
                <li className='flex items-center gap-2'><Image src='/icon-check.svg' alt='check sign' width={9} height={8} /> <span>Email reports</span> </li>
              </ul>
              </div>
              <div className='flex items-center justify-center'>
              <button className='bg-text_cta_background font-extrabold text-CTA  py-2 px-4  rounded-full'>
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
