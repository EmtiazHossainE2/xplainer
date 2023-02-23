import Head from 'next/head'
import React from 'react'

const CommonHead = ({title, metaDes , favIcon}) => {
  return (
    <>
      <Head>
        <title>{title} </title>
        <meta name={metaDes} content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={`${favIcon}`} />
      </Head>
    </>
  )
}

export default CommonHead