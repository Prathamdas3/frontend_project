'use client'
import { Switch } from '@/components/ui/switch'
import { Slider } from '@/components/ui/slider'
import ModeToggle from './DarkButton';
import { useState } from 'react';
import { Button } from './ui/button';

export default function CenterCard() {
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
        <section className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 transition-colors duration-200">
            <div className="w-full max-w-md p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg transition-colors duration-200">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Simple, traffic-based pricing</h1>
                    <ModeToggle />
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-8">Sign-up for our 30-day trial. No credit card required.</p>

                <div className="mb-6">
                    <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-gray-600 dark:text-gray-400">{pageviews}K PAGEVIEWS</span>
                        <span className="text-3xl font-bold text-gray-800 dark:text-white">${calculatePrice()}</span>
                    </div>
                    <Slider
                        value={[pageviews]}
                        onValueChange={(value) => setPageviews(value[0])}
                        max={200}
                        step={1}
                        className="w-full"
                    />
                </div>

                <div className="flex items-center justify-center mb-6">
                    <span className="text-sm text-gray-600 dark:text-gray-400 mr-2">Monthly Billing</span>
                    <Switch
                        checked={yearlyBilling}
                        onCheckedChange={setYearlyBilling}
                    />
                    <span className="text-sm text-gray-600 dark:text-gray-400 ml-2">Yearly Billing</span>
                    <span className="ml-2 text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">25% discount</span>
                </div>

                <hr className="my-6 border-gray-200 dark:border-gray-700" />

                <ul className="mb-6 space-y-2">
                    <li className="flex items-center text-gray-600 dark:text-gray-400">
                        <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                        Unlimited websites
                    </li>
                    <li className="flex items-center text-gray-600 dark:text-gray-400">
                        <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                        100% data ownership
                    </li>
                    <li className="flex items-center text-gray-600 dark:text-gray-400">
                        <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                        Email reports
                    </li>
                </ul>
                <Button variant="default" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-200"> Start my trial</Button>
            </div>
        </section>
    );
};