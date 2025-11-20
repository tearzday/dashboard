import { Table } from '../entities/Table'
import './styles/index.scss'
import { TableHeaderOffer } from '../shared/const'
import { useEffect, useState } from 'react'
import { ButtonIcon } from '@/shared/ui'
import Icon from '@/app/assets/icons/platforms/Google Ads.svg';

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
     <ButtonIcon src={Icon} alt='dawd'/>
    </>
  )
}

export default App
