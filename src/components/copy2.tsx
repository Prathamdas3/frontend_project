'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { Slider } from '@/components/ui/slider'
import { Switch } from '@/components/ui/switch'
import { Button } from '@/components/ui/button'
import { Moon, Sun } from 'lucide-react'

export default function Component() {
  const [pageViews, setPageViews] = useState(100)
  const [isYearly, setIsYearly] = useState(false)
  const [price, setPrice] = useState(16)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    let basePrice = 16 * (pageViews / 100)
    if (isYearly) {
      basePrice *= 0.75 // 25% discount for yearly billing
    }
    setPrice(basePrice)
  }, [pageViews, isYearly])

  return (
    <div className="min-h-screen bg-[#F1F5FE] dark:bg-gray-900 flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-xl bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
        <div className="p-8 text-center">
          <div className="flex justify-end mb-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
            </Button>
          </div>
          <h2 className="text-2xl font-bold text-[#293356] dark:text-white mb-2">Simple, traffic-based pricing</h2>
          <p className="text-[#858FAD] dark:text-gray-400 mb-8">Sign-up for our 30-day trial. No credit card required.</p>
          
          <div className="flex flex-col md:flex-row items-center justify-between mb-8">
            <p className="text-[#858FAD] dark:text-gray-400 uppercase tracking-wider mb-4 md:mb-0">{pageViews}K Pageviews</p>
            <p className="text-3xl font-bold text-[#293356] dark:text-white">
              ${price.toFixed(2)} <span className="text-base font-normal text-[#858FAD] dark:text-gray-400">/ month</span>
            </p>
          </div>
          
          <Slider
            value={[pageViews]}
            onValueChange={(value) => setPageViews(value[0])}
            max={200}
            step={1}
            className="mb-8"
          />
          
          <div className="flex items-center justify-center mb-8">
            <span className="text-[#858FAD] dark:text-gray-400 mr-2">Monthly Billing</span>
            <Switch
              checked={isYearly}
              onCheckedChange={setIsYearly}
            />
            <span className="text-[#858FAD] dark:text-gray-400 ml-2">Yearly Billing</span>
            <span className="ml-2 text-xs bg-[#FEECE7] dark:bg-[#FF8C66]/20 text-[#FF8C66] font-bold py-1 px-2 rounded-full">25% discount</span>
          </div>
          
          <hr className="mb-8 border-gray-200 dark:border-gray-700" />
          
          <div className="flex flex-col md:flex-row items-center justify-between">
            <ul className="text-[#858FAD] dark:text-gray-400 mb-8 md:mb-0">
              <li className="flex items-center mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="9" height="8" className="mr-4">
                  <path fill="none" stroke="#10D8C4" strokeWidth="2" d="M1 4.134l1.907 1.908L7.949 1"/>
                </svg>
                Unlimited websites
              </li>
              <li className="flex items-center mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="9" height="8" className="mr-4">
                  <path fill="none" stroke="#10D8C4" strokeWidth="2" d="M1 4.134l1.907 1.908L7.949 1"/>
                </svg>
                100% data ownership
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="9" height="8" className="mr-4">
                  <path fill="none" stroke="#10D8C4" strokeWidth="2" d="M1 4.134l1.907 1.908L7.949 1"/>
                </svg>
                Email reports
              </li>
            </ul>
            <Button className="bg-[#293356] text-white hover:bg-[#293356]/90 dark:bg-blue-600 dark:hover:bg-blue-700">Start my trial</Button>
          </div>
        </div>
      </div>
    </div>
  )
}