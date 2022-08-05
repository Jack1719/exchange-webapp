import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import React, { useState } from "react"
import { Outlet, useMatch, useNavigate } from "react-router-dom"
import Loading from "../components/Loading"
import Warning from "../components/Warning"
import { TExchangeItem } from "../types/dtos"

interface IProps {}
/**
 * ExchangePage Component
 */

const ExchangePage: React.FC<IProps> = () => {
  const match = useMatch("/exchanges")
  const { data, isError, isLoading } = useQuery<TExchangeItem[]>(["exchanges"], async () => {
    const { data } = await axios.get(
      "https://api.coingecko.com/api/v3/exchanges?per_page=10&page=0",
    )
    return data
  })
  const navigate = useNavigate()
  const [item, setItem] = useState("")
  if (!match) return <Outlet context={item} />

  if (isError) {
    return <Warning message='There was an error while loading data' />
  }
  if (!data || isLoading) {
    return <Loading />
  }

  return (
    <div className='overflow-x-auto relative shadow-md sm:rounded-lg'>
      <table className='w-full text-sm text-left text-gray-500'>
        <thead className='text-xs text-gray-700 uppercase bg-gray-50'>
          <tr>
            <th scope='col' className='py-3 px-6 w-10'>
              #
            </th>
            <th scope='col' className='py-3 px-6'>
              Exchange
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((v, i) => {
            return (
              <tr
                className={`${i % 2 ? "bg-gray-50" : ""} border-b cursor-pointer exchange-item`}
                key={i}
                onClick={() => {
                  setItem(v.id)
                  navigate(`/exchanges/${v.id}`, { replace: true })
                }}
              >
                <th
                  scope='row'
                  className='py-4 px-6 font-medium text-gray-900 whitespace-nowrap text-center'
                >
                  {v.trust_score_rank}
                </th>
                <td className='py-4 px-6 flex flex-row items-center'>
                  <img
                    alt={v.name}
                    className='object-contain'
                    width='40px'
                    height='40px'
                    src={v.image}
                  />
                  <div className='ml-2 flex flex-col'>
                    <a
                      className='exchange-item-name font-medium text-indigo-500 cursor-pointer'
                      href={v.url}
                    >
                      {v.name}
                    </a>
                    <span className='font-light text-xs'>{v.country}</span>
                  </div>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default ExchangePage
