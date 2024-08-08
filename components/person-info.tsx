import { API_URL } from "@/app/constants";
import Image from "next/image";
import FinancialAsset from "./financial-asset";

async function getPerson(id: string) {
    const target_url = `${API_URL}/person/${id}`
    const response = await fetch(target_url);
    return response.json()

    // const json = {
    //     "id": "elon-musk",
    //     "state": "Texas",
    //     "city": "Austin",
    //     "name": "Elon Musk",
    //     "country": "United States",
    //     "position": 1,
    //     "industries": [
    //       "Automotive"
    //     ],
    //     "financialAssets": [
    //       {
    //         "exchange": "NASDAQ",
    //         "ticker": "TSLA-US",
    //         "companyName": "Tesla",
    //         "numberOfShares": 140846000,
    //         "sharePrice": 699,
    //         "currencyCode": "USD",
    //         "exchangeRate": 1,
    //         "interactive": true,
    //         "currentPrice": 639.3
    //       },
    //       {
    //         "exchange": "NASDAQ",
    //         "ticker": "TSLA-US",
    //         "companyName": "Tesla",
    //         "numberOfShares": 2639000,
    //         "exerciseOptionPrice": 6.24,
    //         "sharePrice": 699,
    //         "currencyCode": "USD",
    //         "exchangeRate": 1,
    //         "interactive": false,
    //         "currentPrice": 639.3
    //       },
    //       {
    //         "exchange": "NASDAQ",
    //         "ticker": "TSLA-US",
    //         "companyName": "Tesla",
    //         "numberOfShares": 92858000,
    //         "exerciseOptionPrice": 70.01,
    //         "sharePrice": 699,
    //         "currencyCode": "USD",
    //         "exchangeRate": 1,
    //         "interactive": false,
    //         "currentPrice": 639.3
    //       },
    //       {
    //         "exchange": "NASDAQ",
    //         "ticker": "TSLA-US",
    //         "companyName": "Tesla",
    //         "numberOfShares": 2000,
    //         "exerciseOptionPrice": 8.366,
    //         "sharePrice": 699,
    //         "currencyCode": "USD",
    //         "exchangeRate": 1,
    //         "interactive": false,
    //         "currentPrice": 639.3
    //       },
    //       {
    //         "exchange": "NASDAQ",
    //         "ticker": "TSLA-US",
    //         "companyName": "Tesla",
    //         "numberOfShares": 2000,
    //         "exerciseOptionPrice": 20.01,
    //         "sharePrice": 699,
    //         "currencyCode": "USD",
    //         "exchangeRate": 1,
    //         "interactive": false,
    //         "currentPrice": 639.3
    //       },
    //       {
    //         "exchange": "NYSE",
    //         "ticker": "TWTR-US",
    //         "companyName": "Twitter, Inc.",
    //         "numberOfShares": 73115000,
    //         "sharePrice": 37.99,
    //         "currencyCode": "USD",
    //         "exchangeRate": 1,
    //         "interactive": false,
    //         "currentPrice": 37.36
    //       }
    //     ],
    //     "thumbnail": "http://specials-images.forbesimg.com/imageserve/5f47d4de7637290765bce495/280x425.jpg?fit=scale&background=000000",
    //     "squareImage": "https://specials-images.forbesimg.com/imageserve/5f47d4de7637290765bce495/416x416.jpg?background=000000&cropX1=1699&cropX2=3845&cropY1=559&cropY2=2704",
    //     "bio": [
    //       "Elon Musk is working to revolutionize transportation both on Earth, through electric car maker Tesla -- and in space, via rocket producer SpaceX.",
    //       "He owns about 25% of Tesla between stock and options, but has pledged more than half his stock as collateral for loans; Forbes has applied a discount to take the loans into account.",
    //       "Twitter's board agreed to sell the company to Musk for $44 billion on April 25, 2022, after he disclosed a 9.1% stake and threatened a hostile takeover.",
    //       "SpaceX, Musk's rocket company, is valued at $100 billion after a funding round in December 2021.",
    //       "He grew up in South Africa, then immigrated to Canada at age 17. He landed in the U.S. as a transfer student to the University of Pennsylvania."
    //     ],
    //     "about": [
    //       "Musk was accepted to a graduate program at Stanford, but deferred attendance to launch his first business, software company Zip2.",
    //       "As a kid Musk taught himself to code; he sold his first game, Blastar, for about $500. "
    //     ],
    //     "netWorth": 201430.751
    //   }
    //   return json
}
  

export default async function PersonInfo({ id }: { id: string }) {
    const person = await getPerson(id);
    return (
        <div>
            <div className="max-w-xl bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <Image className="w-full rounded-t-lg" src={`${person?.squareImage}`} alt={person?.name} width={200} height={200} />
                <div className="p-5">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{person?.name}</h5>
                    <hr/>
                    <div className="mt-1 font-normal text-gray-700 dark:text-gray-400">
                        <p>Networth : {Math.floor(person?.netWorth/1000)} Billion </p>
                        <p>Country : {person?.country}</p>
                        <p>Indusstries : {person?.industries[0]}</p>
                        <hr className="my-2"/>
                        <p className="mt-2 font-normal text-gray-700 dark:text-gray-400">{person?.bio.join(" ")}.</p>
                    </div>
                </div>
            </div>
            <div className="max-w-xl bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div className="p-5">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Financial Assets</h5>
                  <div className="grid grid-cols-3">
                        {person?.financialAssets.map((financialAsset, index) => (
                            <FinancialAsset key={index} assets={financialAsset} />
                        ))}
                  </div>
                </div>
            </div>
        </div>
    );
}