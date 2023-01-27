import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Provider from '../contexts';

import Layout from '../layouts/Layout';

import Dashboard from '../pages/Dashboard';
import Users from '../pages/Users';
import Reports from '../pages/Reports';
import UserReports from '../pages/Profile/Reports';
import UserReport from '../pages/Profile/Report';
import UserStatistics from '../pages/Profile/Statistics';
import UserSettings from '../pages/Profile/Settings';
import UserProfile from '../pages/Profile/Profile';

function PrivateRoutes() {
  return (
    <Provider>
      <Layout>
        <Routes>
          <Route
            path="/"
            exact
            element={<Dashboard title="Dashboard" bgColor="#28304e" />}
          />
          <Route
            path="/usuarios"
            exact
            element={<Users title="Usuários" bgColor="#28304e" />}
          />
          <Route path="/perfil/:userId" exact>
            <Route index exact element={<UserProfile title="Perfil" />} />
            <Route
              path="diarios"
              exact
              element={<UserReports title="Perfil" />}
            />
            <Route
              path="diario/:id"
              exact
              element={<UserReport title="Diário" />}
            />
            <Route
              path="estatisticas"
              exact
              element={<UserStatistics title="Estatísticas" />}
            />
            <Route
              path="configuracao"
              exact
              element={<UserSettings title="Configuração" />}
            />
          </Route>
          <Route
            path="/diarios"
            exact
            element={<Reports title="Diários" bgColor="#28304e" />}
          />
        </Routes>
      </Layout>
    </Provider>
  );
}

export default PrivateRoutes;
