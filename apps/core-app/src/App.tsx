import { HausLayout } from '@daohaus/daohaus-connect-feature';
import { Card, FormLayout } from '@daohaus/ui';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import Routes from './Routes';

const Spacer = styled.div`
  width: 100%;
  height: 50rem;
`;

export function App() {
  const { daochain, daoid } = useParams();

  console.log(daoid, daochain);

  return (
    <HausLayout
      navLinks={[
        { label: 'Home', href: `/dao/${daochain}/${daoid}` },
        { label: 'Proposals', href: `/dao/${daochain}/${daoid}/proposals` },
        { label: 'Vaults', href: `/dao/${daochain}/${daoid}/vaults` },
        { label: 'Members', href: `/dao/${daochain}/${daoid}/members` },
      ]}
      dropdownLinks={[{ label: 'Settings', href: '/settings' }]}
    >
      {/* <RoutesDom>
        <Route path="dao/:daoid/:dao" element={<Home />} />
        <Route path="dao/:daoid/:dao/members" element={<Members />} />
      </RoutesDom> */}
    </HausLayout>
  );
}

export default App;
