import React from 'react'
import PortfolioList from '../components/portfolioList'

export default function Portfolio() {
  return (
    <div className="sm:p-20 pr-5 pl-5">
      <div className="section-title">
        <h1 className="title">Portfolio</h1>
      </div>
      <PortfolioList />
    </div>
  )
}
