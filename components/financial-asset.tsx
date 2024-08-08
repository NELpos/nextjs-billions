
interface assetProps {
    ticker : string
    exerciseOptionPrice? : number
    numberOfShares : number
}

export default async function FinancialAsset({ assets }: { assets: assetProps }) {
    console.log(assets)
    return (
        <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <div className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{assets.ticker}</div>
            <p className="font-normal text-gray-700 dark:text-gray-400">Shares : {assets.numberOfShares.toLocaleString("en-US")}</p>
            {assets.exerciseOptionPrice !== undefined ? <p className="font-normal text-gray-700 dark:text-gray-400">Excercise Price : {assets.exerciseOptionPrice.toLocaleString("en-US")}</p> : <div/> }
        </div>
    )
}
