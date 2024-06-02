import { Items } from '@/components/items'

interface TokenList {
  token: {
    address: string
    icon: string
    symbol: string
    name: string
    ticker: string
  }
  daySummary: {
    close: number
    closeDollar: number
    prev: number
    low: number
    high: number
  }
}

async function getPriceList(): Promise<TokenList[]> {
  const response = await fetch(
    `https://napi.wemixplay.com/info/v1/token/dex/crowToken`,
    {
      next: {
        revalidate: 60,
      },
    },
  )

  const coins = await response.json()

  return coins.Data
}

export default async function Tier2() {
  const coinList = await getPriceList()
  return (
    <div className="flex justify-center w-full h-screen">
      <div className="flex flex-col w-[980px] m-32">
        <div className="flex items-center justify-between w-full h-[90px] mb-1">
          <div className="flex items-center w-full h-full p-5 bg-zinc-900">
            <Items tokens={coinList} />
          </div>
        </div>
      </div>
    </div>
  )
}
