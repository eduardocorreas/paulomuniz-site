import React from 'react'
import PortfolioList from '../components/portfolioList'

export default function Portfolio() {
  return (
    <div className="sm:p-20">
      <div className="section-title">
        <h1 className="title">Portfolio</h1>
        <p className="subtitle">Fotografia e Filmagem</p>
      </div>
      <PortfolioList />
    </div>
  )
}
