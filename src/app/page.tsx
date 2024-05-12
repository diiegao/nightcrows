import { Calculate } from '@/components/calculate'
import Image from 'next/image'

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

export default async function Home() {
  const coinList = await getPriceList()
  const crow = await getCrowToken()

  const priceDiamondInCrow = crow.price / 80

  return (
    <div className="flex items-center justify-center w-full h-screen">
      <div className="flex flex-col w-[980px]">
        <div className="flex items-center justify-between w-full h-[90px] mb-1">
          <div className="flex items-center w-[380px] p-5 bg-zinc-900">
            <Image src={crow.icon} width={50} height={50} alt="CROW" />
            <div className="flex flex-col ml-3">
              <h2 className="text-lg">CROW</h2>
              <p className="text-sm">
                {crow.price.toLocaleString('en', {
                  style: 'currency',
                  currency: 'USD',
                  minimumFractionDigits: 4,
                })}
              </p>
            </div>
          </div>
          <div className="flex items-center w-full h-full bg-zinc-800 p-5">
            <div className="flex items-center w-full h-full">
              {'(SHOP)'}
              <Image
                src="https://gcdn.wemade.games/prod/ncgl/official/2.2.0/_next/static/images/token/diagram-vdia.webp"
                width={40}
                height={40}
                alt="Diamond"
              />
              <p className="text-3xl">= $0.0125</p>
            </div>

            <div className="flex items-center w-full h-full">
              {'(CROW)'}
              <Image
                src="https://gcdn.wemade.games/prod/ncgl/official/2.2.0/_next/static/images/token/diagram-vdia.webp"
                width={40}
                height={40}
                alt="Diamond"
              />
              <p className="text-3xl">
                ={' '}
                {priceDiamondInCrow.toLocaleString('en', {
                  style: 'currency',
                  currency: 'USD',
                  minimumFractionDigits: 4,
                })}
              </p>
            </div>
          </div>
        </div>

        {coinList.map(({ token, daySummary }: TokenList) => {
          return (
            <div
              className="flex items-center justify-between w-full h-[90px] mb-1"
              key={token.address}
            >
              <div className="flex items-center w-[380px] p-5 bg-zinc-900">
                <Image
                  src={token.icon}
                  width={50}
                  height={50}
                  alt={token.name}
                />
                <div className="flex flex-col ml-3">
                  <h2 className="text-lg">{token.name}</h2>
                  <p className="text-sm">
                    {daySummary.close} CROW{' '}
                    <span className="text-xs text-zinc-400">
                      (
                      {daySummary.closeDollar.toLocaleString('en', {
                        style: 'currency',
                        currency: 'USD',
                      })}
                      )
                    </span>
                  </p>
                </div>
              </div>
              <Calculate price={daySummary.closeDollar} crow={crow.price} />
            </div>
          )
        })}
      </div>
    </div>
  )
}
