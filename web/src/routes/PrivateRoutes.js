import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Provider from '../contexts';

import Layout from '../layouts/Layout';

import Dashboard from '../pages/Dashboard';
import Users from '../pages/Users';
import Profile from '../pages/Profile';
import Report from '../pages/Report';
import Reports from '../pages/Reports';
import UserReports from '../pages/UserReports';
import Settings from '../pages/Settings';

function PrivateRoutes() {
  return (
    <Provider>
      <Layout>
        <Routes>
          <Route path="/" exact element={<Dashboard title="Dashboard" />} />
          <Route path="/usuarios" exact element={<Users title="Usuários" />} />
          <Route path="/perfil/:userId" exact>
            <Route index exact element={<Profile title="Perfil" />} />
            <Route
              path="diarios"
              exact
              element={<UserReports title="Diários" />}
            />
          </Route>
          <Route path="/diarios" exact element={<Reports title="Diários" />} />
          <Route
            path="/diario/:reportId"
            exact
            element={<Report title="Dário" />}
          />
          <Route
            path="/configuracao/:usertId"
            exact
            element={<Settings title="Configurações" />}
          />
        </Routes>
      </Layout>
    </Provider>
  );
}

export default PrivateRoutes;
