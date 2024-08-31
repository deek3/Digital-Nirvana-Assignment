import { useEffect, useState } from 'react';
import './styles/main.css';
import CorporateParticipants from './components/CorporateParticipants';
import ConferenceParticipants from './components/ConferenceParticipants';
import QA from './components/QA';
import Presentations from './components/Presentations';
import responseData from "./data/response.json"
function App() {
  const [tabs] = useState([
    {
      key: 'qa',
      displayName: "Q&A",
    },
    {
      key: 'presentations',
      displayName: "Presentation",
    },
    {
      key: 'corporateParticipants',
      displayName: "Corporate Participants",
    },
    {
      key: 'conferenceParticipants',
      displayName: "Conference Participants",
    }
  ])

  const [selectedTab, setSelectedTab] = useState(tabs[0])
  const [data, setData] = useState({});

  const fetchData = () => {
    let jsonData = responseData
    if(jsonData?.data?.items?.transcript_data){
      setData(jsonData.data.items.transcript_data)
    }
  }

  useEffect( () => {
    fetchData()
  }, [])
  const switchTab = (selectedTab) => {
    setSelectedTab(selectedTab)
  }
  return (
    <div className="App">
      <div className="tabs">
          { tabs.map( (eachTab) => (
            <div key={eachTab.key} className={`tab-wrapper ${eachTab.key === selectedTab.key ? 'selected': ''}`} onClick={() => switchTab(eachTab)} >
              <span className="tab-text">{eachTab.displayName}</span>
            </div>
          )) }
      </div>
      { Object.keys(data)?.length > 0 && (
        <div className="selected-tab-wrapper">
          {selectedTab.key === 'qa' && <QA data={data?.questions_and_answers} /> }
          {selectedTab.key === 'corporateParticipants' && <CorporateParticipants data={data?.participants?.executives} /> }
          {selectedTab.key === 'conferenceParticipants' && <ConferenceParticipants data={data?.participants?.analyst} /> }
          {selectedTab.key === 'presentations' && <Presentations data={data?.presentation} /> }
      </div>
      )}
    </div>
  );
}

export default App;
