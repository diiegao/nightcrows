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

interface CrowToken {
  icon: string
  price: number
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

async function getCrowToken(): Promise<CrowToken> {
  const response = await fetch(
    `https://api.wemixplay.com/info/v1/coin-detail?symbol=CROW`,
    {
      next: {
        revalidate: 60,
      },
    },
  )

  const crow = await response.json()

  return {
    icon: crow.data.icon,
    price: crow.data.priceData.price,
  }
}

export default async function Tier2() {
  const coinList = await getPriceList()
  const crow = await getCrowToken()

  return (
    <div className="flex justify-center w-full h-screen">
      <div className="flex flex-col w-[980px] m-32">
        <div className="flex items-center justify-between w-full h-[90px] mb-1">
          <div className="flex items-center w-full h-full p-5 bg-zinc-900">
            <Items tokens={coinList} crow={crow} />
          </div>
        </div>
      </div>
    </div>
  )
}
