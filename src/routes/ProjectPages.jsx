import React from "react";
import { PrivateRoute, DatabasePageRoute } from "../utils";
import { Route, Redirect, Switch } from "react-router-dom";
import { projectModules } from "../constants";

import NoPermissions from "../pages/no-permissions/NoPermissions";
import DatabaseIndexPage from "../pages/database/Index";
import DatabaseEmptyStatePage from "../pages/database/empty-state/EmptyState";
import Overview from "../pages/overview/Overview";
import DatabasePage from "../pages/database/Database";
import DBOverview from "../pages/database/overview/DBOverview";
import DBBrowse from "../pages/database/browse/DBBrowse";
import DBSettings from "../pages/database/settings/DBSettings";
import DBQueries from "../pages/database/queries/DBQueries";
import AddDb from "../pages/database/add-db/AddDb";
import PreparedQueries from '../pages/database/prepared-queries/PreparedQueries';
import AddPreparedQueries from '../pages/database/prepared-queries/AddPreparedQueries';
import FileStorageIndex from "../pages/file-storage/FileStorageIndex";
import FileStorage from "../pages/file-storage/FileStorage";
import FileStorageConfig from "../pages/file-storage/FileStorageConfig";
import EventingIndex from "../pages/eventing/Index";
import EventingOverview from "../pages/eventing/EventingOverview";
import EventingRules from "../pages/eventing/EventingRules";
import EventingSchema from "../pages/eventing/EventingSchema";
import EventingLogs from "../pages/eventing/EventingLogs";
import EventingSettings from "../pages/eventing/EventingSettings";
import QueueEvent from "../pages/eventing/queue-event/QueueEvent";
import RemoteServicesIndex from "../pages/explorer/remote-services/RemoteServicesIndex";
import RemoteServices from "../pages/explorer/remote-services/Index";
import Endpoints from "../pages/explorer/remote-services/Endpoints";
import ConfigureEndpoint from "../pages/explorer/remote-services/ConfigureEndpoint";
import UserManagement from "../pages/user-management/UserManagement";
import DeploymentsIndex from "../pages/deployments/Index";
import DeploymentsOverview from "../pages/deployments/overview/DeploymentsOverview";
import DeploymentsRoutes from "../pages/deployments/routes/DeploymentsRoutes";
import DeploymentsRoles from "../pages/deployments/roles/DeploymentsRoles";
import ServiceRoleForm from "../pages/deployments/roles/ServiceRoleForm";
import DeploymentsLogs from "../pages/deployments/deployment-logs/DeploymentLogs";
import ConfigureDeployment from "../pages/deployments/configure-deployment/ConfigureDeployment";
import Graphql from "../pages/explorer/graphql/Graphql";
import SpaceApi from "../pages/explorer/spaceApi/SpaceApi";
import ProjectSettings from "../pages/settings/project/ProjectSettings";
import ClusterSettings from "../pages/settings/cluster/ClusterSettings";
import RoutingOverview from '../pages/routing/overview/Overview';
import RoutingSettings from '../pages/routing/settings/Settings';
import SecretsIndex from "../pages/secrets/Index";
import Secrets from '../pages/secrets/Secrets';
import SecretDetails from '../pages/secrets/SecretDetails';
import ConfigureCache from '../pages/cache/configure-cache/ConfigureCache';
import CacheOverview from '../pages/cache/overview/Overview';
import CacheIndex from '../pages/cache/Index';
import ConfigureRabbitMQ from "../pages/settings/add-ons/rabbit-mq/RabbitMQ";
import ConfigureRedis from "../pages/settings/add-ons/redis/ConfigureRedis";
// import AddOns from "../pages/settings/add-ons/AddOns";


function ProjectPages() {
  return (
    <React.Fragment>
      <PrivateRoute exact path="/mission-control/projects/:projectID"
        component={props => <Redirect to={`/mission-control/projects/${props.match.params.projectID}/${projectModules.EXPLORER}`} />} />
      <Route path="/mission-control/projects/:projectID/no-permissions" component={NoPermissions} />
      <PrivateRoute path={`/mission-control/projects/:projectID/${projectModules.DATABASE}`} component={DatabaseIndexPage} />
      <Switch>
        <PrivateRoute exact path={`/mission-control/projects/:projectID/${projectModules.DATABASE}`} component={DatabaseEmptyStatePage} />
        <PrivateRoute exact path={`/mission-control/projects/:projectID/${projectModules.DATABASE}/add-db`} component={AddDb} />
        <DatabasePageRoute exact path={`/mission-control/projects/:projectID/${projectModules.DATABASE}/:selectedDB`} component={DatabasePage} />
        <DatabasePageRoute exact path={`/mission-control/projects/:projectID/${projectModules.DATABASE}/:selectedDB/overview`} component={DBOverview} />
        <DatabasePageRoute exact path={`/mission-control/projects/:projectID/${projectModules.DATABASE}/:selectedDB/browse`} component={DBBrowse} />
        <DatabasePageRoute exact path={`/mission-control/projects/:projectID/${projectModules.DATABASE}/:selectedDB/settings`} component={DBSettings} />
        <DatabasePageRoute exact path={`/mission-control/projects/:projectID/${projectModules.DATABASE}/:selectedDB/queries`} component={DBQueries} />
        <DatabasePageRoute exact path={`/mission-control/projects/:projectID/${projectModules.DATABASE}/:selectedDB/prepared-queries`} component={PreparedQueries} />
        <DatabasePageRoute exact path={`/mission-control/projects/:projectID/${projectModules.DATABASE}/:selectedDB/prepared-queries/add`} component={AddPreparedQueries} />
        <DatabasePageRoute exact path={`/mission-control/projects/:projectID/${projectModules.DATABASE}/:selectedDB/prepared-queries/:preparedQueryId/edit`} component={AddPreparedQueries} />
      </Switch>
      <PrivateRoute path={`/mission-control/projects/:projectID/${projectModules.CACHE}`} component={CacheIndex} />
      <PrivateRoute exact path={`/mission-control/projects/:projectID/${projectModules.CACHE}`} component={CacheOverview} />
      <PrivateRoute exact path={`/mission-control/projects/:projectID/${projectModules.CACHE}/configure`} component={ConfigureCache} />
      <PrivateRoute exact path={`/mission-control/projects/:projectID/${projectModules.SETTINGS}`}
        component={props => <Redirect to={`/mission-control/projects/${props.match.params.projectID}/settings/project`} />} />
      <PrivateRoute exact path={`/mission-control/projects/:projectID/${projectModules.SETTINGS}/project`} component={ProjectSettings} />
      <PrivateRoute exact path={`/mission-control/projects/:projectID/${projectModules.SETTINGS}/cluster`} component={ClusterSettings} />
      {/* <PrivateRoute exact path={`/mission-control/projects/:projectID/${projectModules.SETTINGS}/add-ons`} component={AddOns} /> */}
      <PrivateRoute exact path={`/mission-control/projects/:projectID/${projectModules.SETTINGS}/add-ons/configure/rabbit-mq`} component={ConfigureRabbitMQ} />
      <PrivateRoute exact path={`/mission-control/projects/:projectID/${projectModules.SETTINGS}/add-ons/configure/redis`} component={ConfigureRedis} />
      <PrivateRoute path={`/mission-control/projects/:projectID/${projectModules.REMOTE_SERVICES}`} component={RemoteServicesIndex} />
      <PrivateRoute exact path={`/mission-control/projects/:projectID/${projectModules.REMOTE_SERVICES}`} component={RemoteServices} />
      <PrivateRoute exact path={`/mission-control/projects/:projectID/${projectModules.REMOTE_SERVICES}/:serviceName`} component={Endpoints} />
      <PrivateRoute exact path={`/mission-control/projects/:projectID/${projectModules.REMOTE_SERVICES}/:serviceName/endpoints/add`} component={ConfigureEndpoint} />
      <PrivateRoute exact path={`/mission-control/projects/:projectID/${projectModules.REMOTE_SERVICES}/:serviceName/endpoints/:endpointName/edit`} component={ConfigureEndpoint} />
      <PrivateRoute exact path={`/mission-control/projects/:projectID/${projectModules.EXPLORER}`} component={Graphql} />
    </React.Fragment>
  )
}

export default ProjectPages
