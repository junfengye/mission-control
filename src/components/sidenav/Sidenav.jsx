import React from 'react'
import { Link, useParams } from 'react-router-dom';
import SidenavItem from './SidenavItem'
import './sidenav.css'
import { useSelector } from "react-redux";
import store from "../../store"
import { set } from "automate-redux"
import { DownOutlined, InfoCircleOutlined } from '@ant-design/icons';
import { Collapse, Divider, Typography, Space } from "antd";
import { getEnv } from '../../operations/cluster';
import { projectModules } from '../../constants';
import { version as uiVersion } from '../../../package.json';
const { Panel } = Collapse;

const Header = ({ name, icon }) => {

  return (
    <div className="sidenav-item">
      <i className="material-icons-outlined sidenav-item__icon">{icon}</i>
      <span className="sidenav-item__name">{name}</span>
    </div>
  )
}

const PanelItem = (props) => {

  return (
    <div className={
      props.active ? 'sidenav-item sidenav-item--active' : 'sidenav-item'
    } >
      <i className="material-icons-outlined sidenav-item__icon">{props.icon}</i>
      <span className="sidenav-collapsed-item__name">{props.name}</span>
    </div>
  )
}

const Sidenav = (props) => {
  const { projectID } = useParams()
  const showSidenav = useSelector(state => state.uiState.showSidenav)
  const sideNavActiveKeys = useSelector(state => state.uiState.sideNavActiveKeys)
  const { version } = useSelector(state => getEnv(state))
  const closeSidenav = () => {
    store.dispatch(set("uiState.showSidenav", false))
  }

  const setActiveKeys = (activeKeys) => {
    store.dispatch(set("uiState.sideNavActiveKeys", activeKeys))
  }

  return (
    <div className="sidenav-container">
      <div className={showSidenav ? 'overlay' : 'no-overlay'} onClick={() => store.dispatch(set("uiState.showSidenav", false))}/>
      <div className={showSidenav ? 'sidenav' : 'no-sidenav'}>
        <div style={{ overflowY: "auto" }}>
          <Link to={`/mission-control/projects/${projectID}/${projectModules.EXPLORER}`} onClick={closeSidenav}>
            <SidenavItem name="API Explorer" icon="explore" active={props.selectedItem === projectModules.EXPLORER} />
          </Link>
          <Link to={`/mission-control/projects/${projectID}/${projectModules.DATABASE}`} onClick={closeSidenav}>
            <SidenavItem name="Database" icon="storage" active={props.selectedItem === projectModules.DATABASE} />
          </Link>
          <Link to={`/mission-control/projects/${projectID}/${projectModules.CACHE}`} onClick={closeSidenav}>
            <SidenavItem name="Cache" icon="bolt" active={props.selectedItem === projectModules.CACHE} />
          </Link>
        </div>
        <div className="sidenav-version">
          <div className="sidenav-version-content">
            <Link to={`/mission-control/projects/${projectID}/${projectModules.SETTINGS}`} onClick={closeSidenav}>
              <SidenavItem name="Settings" icon="settings" active={props.selectedItem === projectModules.SETTINGS} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Sidenav;
