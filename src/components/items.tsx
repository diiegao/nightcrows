'use client'

import Image from 'next/image'
import { useState } from 'react'

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
  // console.log({ tokens })
  const [qtdRareT2, setQtdRareT2] = useState<number>(1)
  const [qtdEpicT1, setQtdEpicT1] = useState<number>(1)
  const [qtdEpicT2, setQtdEpicT2] = useState<number>(1)

  function getToken(coin: string, qtd: number, items: number) {
    const getCoin = tokens.find((t) => t.token.name === coin)

    return {
      price: getCoin!.daySummary.close * qtd * items,
      priceUSD: getCoin!.daySummary.closeDollar * qtd * items,
    }
  }

  const totalPriceItem = (items: number[]) => items.reduce((p, c) => p + c, 0)
  const totalItemsNeeded = (need: number, qtd: number) => need * qtd

  return (
    <div className="flex flex-col w-full gap-3 p-5 bg-zinc-900">
      <div className="flex items-center justify-between w-full ">
        <p className="flex items-center justify-center">RARE T2</p>
        <input
          type="text"
          value={qtdRareT2}
          onFocus={(e) => e.target.select()}
          onChange={(e) => setQtdRareT2(Number(e.target.value))}
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
          <p>{totalItemsNeeded(750000, qtdRareT2).toLocaleString('pt-br')}</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative text-3xsxs">
            <span className="absolute right-0 bottom-0 text-white">
              x{totalItemsNeeded(60, qtdRareT2)}
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
              {getToken('PAPYRUS', 6, qtdRareT2).price!.toLocaleString('en', {
                minimumFractionDigits: 4,
              })}
            </p>
            <p className="text-zinc-300">
              {'('}
              {getToken('PAPYRUS', 6, qtdRareT2).priceUSD!.toLocaleString(
                'en',
                {
                  style: 'currency',
                  currency: 'USD',
                },
              )}
              {')'}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative text-3xsxs">
            <span className="absolute right-0 bottom-0 text-white">
              x{totalItemsNeeded(60, qtdRareT2)}
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
              {getToken('MORION', 6, qtdRareT2).price!.toLocaleString('en', {
                minimumFractionDigits: 4,
              })}
            </p>
            <p className="text-zinc-300">
              {'('}
              {getToken('MORION', 6, qtdRareT2).priceUSD!.toLocaleString('en', {
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
              {totalPriceItem([
                getToken('MORION', 6, qtdRareT2).price,
                getToken('PAPYRUS', 6, qtdRareT2).price,
              ]).toLocaleString('en', {
                minimumFractionDigits: 4,
              })}
            </p>
            <p className="text-zinc-300">
              {'('}
              {totalPriceItem([
                getToken('MORION', 6, qtdRareT2).priceUSD,
                getToken('PAPYRUS', 6, qtdRareT2).priceUSD,
              ]).toLocaleString('en', {
                style: 'currency',
                currency: 'USD',
              })}
              {')'}
            </p>
          </div>
        </div>
      </div>

      {/* EPIC T1 */}
      <div className="flex items-center justify-between w-full border-t-[1px] border-zinc-600">
        <p className="flex items-center justify-center">EPIC T1</p>
        <input
          type="text"
          value={qtdEpicT1}
          onFocus={(e) => e.target.select()}
          onChange={(e) => setQtdEpicT1(Number(e.target.value))}
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
          <p>{totalItemsNeeded(3000000, qtdEpicT1).toLocaleString('pt-br')}</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative text-3xsxs">
            <span className="absolute right-0 bottom-0 text-white">
              x{totalItemsNeeded(35, qtdEpicT1)}
            </span>
            <Image
              src="https://live-dl.nightcrows.com/data/image/discovery/235350/Game/UI/Tex/Item/Material/UI_Texture_Item_Material_Craft_Common_Grade4_001.png"
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
              {getToken('TEAR', 35, qtdEpicT1).price!.toLocaleString('en', {
                minimumFractionDigits: 4,
              })}
            </p>
            <p className="text-zinc-300">
              {'('}
              {getToken('TEAR', 35, qtdEpicT1).priceUSD!.toLocaleString('en', {
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
              x{totalItemsNeeded(294, qtdEpicT1)}
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
              {getToken('PAPYRUS', 30, qtdEpicT1).price!.toLocaleString('en', {
                minimumFractionDigits: 4,
              })}
            </p>
            <p className="text-zinc-300">
              {'('}
              {getToken('PAPYRUS', 30, qtdEpicT1).priceUSD!.toLocaleString(
                'en',
                {
                  style: 'currency',
                  currency: 'USD',
                },
              )}
              {')'}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative text-3xsxs">
            <span className="absolute right-0 bottom-0 text-white">
              x{totalItemsNeeded(392, qtdEpicT1)}
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
              {getToken('MORION', 40, qtdEpicT1).price!.toLocaleString('en', {
                minimumFractionDigits: 4,
              })}
            </p>
            <p className="text-zinc-300">
              {'('}
              {getToken('MORION', 40, qtdEpicT1).priceUSD!.toLocaleString(
                'en',
                {
                  style: 'currency',
                  currency: 'USD',
                },
              )}
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
              {totalPriceItem([
                getToken('MORION', 40, qtdEpicT1).price,
                getToken('PAPYRUS', 30, qtdEpicT1).price,
                getToken('TEAR', 35, qtdEpicT1).price,
              ]).toLocaleString('en', {
                minimumFractionDigits: 4,
              })}
            </p>
            <p className="text-zinc-300">
              {'('}
              {totalPriceItem([
                getToken('MORION', 40, qtdEpicT1).priceUSD,
                getToken('PAPYRUS', 30, qtdEpicT1).priceUSD,
                getToken('TEAR', 35, qtdEpicT1).priceUSD,
              ]).toLocaleString('en', {
                style: 'currency',
                currency: 'USD',
              })}
              {')'}
            </p>
          </div>
        </div>
      </div>

      {/* EPIC T2 */}
      <div className="flex items-center justify-between w-full border-t-[1px] border-zinc-600">
        <p className="flex items-center justify-center">EPIC T2</p>
        <input
          type="text"
          value={qtdEpicT2}
          onFocus={(e) => e.target.select()}
          onChange={(e) => setQtdEpicT2(Number(e.target.value))}
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
          <p>{totalItemsNeeded(3000000, qtdEpicT2).toLocaleString('pt-br')}</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative text-3xsxs">
            <span className="absolute right-0 bottom-0 text-white">
              x{totalItemsNeeded(100, qtdEpicT2)}
            </span>
            <Image
              src="https://live-dl.nightcrows.com/data/image/discovery/235350/Game/UI/Tex/Item/Material/UI_Texture_Item_Material_Craft_Common_Grade4_001.png"
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
              {getToken('TEAR', 100, qtdEpicT2).price!.toLocaleString('en', {
                minimumFractionDigits: 4,
              })}
            </p>
            <p className="text-zinc-300">
              {'('}
              {getToken('TEAR', 100, qtdEpicT2).priceUSD!.toLocaleString('en', {
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
              x{totalItemsNeeded(420, qtdEpicT2)}
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
              {getToken('PAPYRUS', 42, qtdEpicT2).price!.toLocaleString('en', {
                minimumFractionDigits: 4,
              })}
            </p>
            <p className="text-zinc-300">
              {'('}
              {getToken('PAPYRUS', 42, qtdEpicT2).priceUSD!.toLocaleString(
                'en',
                {
                  style: 'currency',
                  currency: 'USD',
                },
              )}
              {')'}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative text-3xsxs">
            <span className="absolute right-0 bottom-0 text-white">
              x{totalItemsNeeded(560, qtdEpicT2)}
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
              {getToken('MORION', 56, qtdEpicT2).price!.toLocaleString('en', {
                minimumFractionDigits: 4,
              })}
            </p>
            <p className="text-zinc-300">
              {'('}
              {getToken('MORION', 56, qtdEpicT2).priceUSD!.toLocaleString(
                'en',
                {
                  style: 'currency',
                  currency: 'USD',
                },
              )}
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
              {totalPriceItem([
                getToken('MORION', 56, qtdEpicT2).price,
                getToken('PAPYRUS', 42, qtdEpicT2).price,
                getToken('TEAR', 100, qtdEpicT2).price,
              ]).toLocaleString('en', {
                minimumFractionDigits: 4,
              })}
            </p>
            <p className="text-zinc-300">
              {'('}
              {totalPriceItem([
                getToken('MORION', 56, qtdEpicT2).priceUSD,
                getToken('PAPYRUS', 42, qtdEpicT2).priceUSD,
                getToken('TEAR', 100, qtdEpicT2).priceUSD,
              ]).toLocaleString('en', {
                style: 'currency',
                currency: 'USD',
              })}
              {')'}
            </p>
          </div>
        </div>
      </div>
      {/* END */}
    </div>
  )
}
