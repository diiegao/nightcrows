'use client'

import Image from 'next/image'
import { ChangeEvent, useState } from 'react'

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

interface ItemsProps {
  tokens: TokenList[]
}

export function Items({ tokens }: ItemsProps) {
  // console.log({ tokens, crow })
  const [qtdItems, setQtdItems] = useState<number>(1)

  const totalGold = 750000 * qtdItems

  const getPapyrusPrice = tokens.find((coin) => coin.token.name === 'PAPYRUS')
  const pricePapyrus =
    getPapyrusPrice && getPapyrusPrice.daySummary.close * 6 * qtdItems
  const pricePapyrusUSD =
    getPapyrusPrice && getPapyrusPrice.daySummary.closeDollar * 6 * qtdItems

  const getMorionPrice = tokens.find((coin) => coin.token.name === 'MORION')
  const priceMorion =
    getMorionPrice && getMorionPrice.daySummary.close * 6 * qtdItems
  const priceMorionUSD =
    getMorionPrice && getMorionPrice.daySummary.closeDollar * 6 * qtdItems

  const totalPrice = pricePapyrus! + priceMorion!
  const totalPriceUSD = pricePapyrusUSD! + priceMorionUSD!

  const totalItems = qtdItems * 6

  function handleQtdItems(e: ChangeEvent<HTMLInputElement>) {
    setQtdItems(Number(e.target.value))
  }

  return (
    <div className="flex items-center justify-between w-full">
      <p className="flex items-center justify-center text-3xl">x</p>
      <input
        type="text"
        value={qtdItems}
        onFocus={(e) => e.target.select()}
        onChange={handleQtdItems}
        placeholder="QTD"
        className="w-[80px] p-3 mx-1 text-3xl border-b-[1px] border-zinc-400 bg-transparent focus-visible:outline-none"
      />
      <p className="flex items-center justify-center text-3xl"> = </p>
      <div className="flex items-center gap-4">
        <Image
          src="https://gcdn.wemade.games/prod/ncgl/official/2.5.4/_next/static/images/nft/currency-gold.webp"
          width={40}
          height={40}
          alt="GOLD"
        />
        <p>{totalGold.toLocaleString('pt-br')}</p>
      </div>
      <div className="flex items-center gap-4">
        <div className="relative text-3xsxs">
          <span className="absolute right-0 bottom-0 text-white">
            x{totalItems}
          </span>
          <Image
            src="https://live-dl.nightcrows.com/data/image/discovery/235350/Game/UI/Tex/Item/Material/UI_Texture_Item_Material_Craft_Buff_Scroll_003.png"
            width={40}
            height={40}
            alt="GOLD"
          />
        </div>
        <div className="flex items-center flex-col">
          <p className="flex">
            <Image
              src="https://cache.wemixplay.com/ADMIN-CONSOLE/TOKEN/CROW/5b1653cc-d2b1-4d57-a03c-4a73e83dbb46-crow.png"
              width={23}
              height={20}
              alt="CROW"
            />
            {pricePapyrus!.toLocaleString('en', {
              minimumFractionDigits: 4,
            })}
          </p>
          <p className="text-zinc-300">
            {'('}
            {pricePapyrusUSD!.toLocaleString('en', {
              style: 'currency',
              currency: 'USD',
            })}
            {')'}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="relative text-3xsxs">
          <span className="absolute right-0 bottom-0 text-white">
            x{totalItems}
          </span>
          <Image
            src="https://live-dl.nightcrows.com/data/image/discovery/235350/Game/UI/Tex/Item/Material/UI_Texture_Item_Material_Ruler_Stone.png"
            width={40}
            height={40}
            alt="GOLD"
          />
        </div>
        <div className="flex items-center flex-col">
          <p className="flex">
            <Image
              src="https://cache.wemixplay.com/ADMIN-CONSOLE/TOKEN/CROW/5b1653cc-d2b1-4d57-a03c-4a73e83dbb46-crow.png"
              width={23}
              height={20}
              alt="CROW"
            />
            {priceMorion!.toLocaleString('en', {
              minimumFractionDigits: 4,
            })}
          </p>
          <p className="text-zinc-300">
            {'('}
            {priceMorionUSD!.toLocaleString('en', {
              style: 'currency',
              currency: 'USD',
            })}
            {')'}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <p>TOTAL:</p>
        <div className="flex items-center flex-col">
          <p className="flex">
            <Image
              src="https://cache.wemixplay.com/ADMIN-CONSOLE/TOKEN/CROW/5b1653cc-d2b1-4d57-a03c-4a73e83dbb46-crow.png"
              width={23}
              height={20}
              alt="CROW"
            />
            {totalPrice.toLocaleString('en', {
              minimumFractionDigits: 4,
            })}
          </p>
          <p className="text-zinc-300">
            {'('}
            {totalPriceUSD.toLocaleString('en', {
              style: 'currency',
              currency: 'USD',
            })}
            {')'}
          </p>
        </div>
      </div>
    </div>
  )
}
