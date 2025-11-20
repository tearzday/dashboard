import { Table } from './entities/Table'
import './styles/index.scss'
import { TableHeaderOffer } from './shared/const'
import { useEffect, useState } from 'react'

function App() {
  const [currentMetrics, setCurrentMetrics] = useState([])
  const [offers, setOffers] = useState([])

  useEffect(() => {
    const data = async () => {
      const response = await fetch('../mock-data.json')
      const json = await response.json()
      
      setCurrentMetrics(json.currentMetrics)
      setOffers(json.offers)
    }

    data()
  }, [])
  return (
    <>
     <Table header={TableHeaderOffer} data={offers}/>
    </>
  )
}

export default App
