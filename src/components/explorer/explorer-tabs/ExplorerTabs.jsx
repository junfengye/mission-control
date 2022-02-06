import React from "react";
import { Tabs } from "antd";
import { Redirect } from "react-router-dom";
import "./explorer-tabs.css";
import { projectModules } from "../../../constants";
const { TabPane } = Tabs;

export default ({ activeKey, projectID }) => {
  return (
    <div className="explorer-tabs">
      <Tabs defaultActiveKey={activeKey} >
        <TabPane tab='GraphiQL' key='graphiQL'>
          <Redirect
            to={{
              pathname: `/mission-control/projects/${projectID}/${projectModules.EXPLORER}`
            }}
          />
        </TabPane>
        <TabPane tab='REST Service' key='restService'>
          <Redirect
            to={{
              pathname: `/mission-control/projects/${projectID}/${projectModules.REMOTE_SERVICES}`
            }}
          />
        </TabPane>
      </Tabs>
    </div>
  )
}
