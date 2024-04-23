import './index.css'

const TabItem = props => {
  const {tabDetails, onChangeTab, isActive} = props

  const {tabId, displayText} = tabDetails

  const onClickTab = () => {
    onChangeTab(tabId)
  }

  const activeTabClassName = isActive ? 'active-tab-btn' : ''

  return (
    <li className="list-item">
      <button
        type="button"
        onClick={onClickTab}
        className={`button ${activeTabClassName}`}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
