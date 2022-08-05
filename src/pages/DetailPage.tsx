import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import React from "react"
import { useParams } from "react-router-dom"
import Loading from "../components/Loading"
import Warning from "../components/Warning"
import { TExchangeItemDetail } from "../types/dtos"
import { convertToSafeString } from "../utils"

interface IProps {}
/**
 * DetailPage Component
 */

const DetailPage: React.FC<IProps> = () => {
  const { id } = useParams()
  const { data, isError, isLoading } = useQuery<TExchangeItemDetail>(
    ["exchanges", id],
    async () => {
      const { data } = await axios.get(`https://api.coingecko.com/api/v3/exchanges/${id}`)
      return data
    },
  )
  let content = null
  if (isError) {
    // should show warning when we have error while fetching data
    content = <Warning message='There was an error while loading data' />
  } else if (!data || isLoading) {
    // should show loading while we loading data
    content = <Loading />
  } else {
    content = (
      <div className='bg-white shadow overflow-hidden sm:rounded-lg' id='detail-id'>
        <div className='px-4 py-5 sm:px-6 flex flex-row items-center'>
          <img
            alt={data.name}
            className='object-contain'
            width='40px'
            height='40px'
            src={data.image}
          />
          <h3 className='text-lg leading-6 font-medium text-gray-900 ml-2'>Exchange Information</h3>
        </div>
        <div className='border-t border-gray-200'>
          <dl>
            <div className='bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
              <dt className='text-sm font-medium text-gray-500'>Name</dt>
              <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>{data.name}</dd>
            </div>
            <div className='bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
              <dt className='text-sm font-medium text-gray-500'>Country</dt>
              <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>{data.country}</dd>
            </div>
            <div className='bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
              <dt className='text-sm font-medium text-gray-500'>Trust Rank</dt>
              <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                {data.trust_score_rank}
              </dd>
            </div>
            <div className='bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
              <dt className='text-sm font-medium text-gray-500'>Year of establishment</dt>
              <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                {data.year_established}
              </dd>
            </div>
            <div className='bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
              <dt className='text-sm font-medium text-gray-500'>Facebook</dt>
              <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                {convertToSafeString(data.facebook_url)}
              </dd>
            </div>
            <div className='bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
              <dt className='text-sm font-medium text-gray-500'>Reddit</dt>
              <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                {convertToSafeString(data.reddit_url)}
              </dd>
            </div>
            <div className='bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
              <dt className='text-sm font-medium text-gray-500'>Telegram</dt>
              <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                {convertToSafeString(data.telegram_url)}
              </dd>
            </div>
            <div className='bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
              <dt className='text-sm font-medium text-gray-500'>Slack</dt>
              <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                {convertToSafeString(data.slack_url)}
              </dd>
            </div>
            <div className='bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
              <dt className='text-sm font-medium text-gray-500'>Other 1</dt>
              <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                {convertToSafeString(data.other_url_1)}
              </dd>
            </div>
            <div className='bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
              <dt className='text-sm font-medium text-gray-500'>Other 2</dt>
              <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                {convertToSafeString(data.other_url_2)}
              </dd>
            </div>
            <div className='bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
              <dt className='text-sm font-medium text-gray-500'>Twitter</dt>
              <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                {data.twitter_handle}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    )
  }

  return (
    <div className=''>
      <div className='w-full flex flex-row'>
        <a
          id='back-nav'
          type='button'
          className={`text-gray-900 bg-white border border-gray-300 focus:outline-none self-start
            hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2`}
          href='/exchanges'
        >
          Back
        </a>
      </div>
      {content}
    </div>
  )
}

export default DetailPage
