import { MouseEvent, ChangeEvent, useEffect, useState } from 'react';
import { indigoDark } from '@radix-ui/colors';
import styled from 'styled-components';

import { useHausConnect } from '@daohaus/daohaus-connect-feature';
import { breakpoints } from '@daohaus/ui';
import { Haus, ITransformedMembership } from '@daohaus/dao-data';

import { HeaderProfile } from '../components/Profile';
import Header from '../components/Header';
import { BodyNav } from '../components/BodyNav';
import { HomeDashboard } from '../components/HomeDashboard';
import { HomeNotConnected } from './HomeNotConnected';
import {
  isValidNetwork,
  networkData,
  ValidNetwork,
} from '@daohaus/common-utilities';

import { getDelegateFilter } from '../utils/queryHelpers';
import { DEFAULT_SORT_KEY, SORT_FIELDS } from '../utils/constants';
import useDebounce from '../utils/debounceHook';

const Layout = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100%;
  min-width: 100%;
  overflow-x: hidden;
  // REVIEW
  // SWITCH TO SCROLL WHEN NEEDED
  // WAS CAUSING DOUBLE SCROLL BARS
  overflow-y: auto;
  gap: 0rem 0rem;
  display: grid;

  grid-template:
    'sidebarTopLeft header sidebarTopRight' 9.6rem
    'sidebarTopLeft profile sidebarTopRight' minmax(auto, 9.6rem)
    'sidebar body aside' 1fr / 1fr minmax(auto, 35rem) 1fr;

  @media (min-width: ${breakpoints.xs}) {
    grid-template:
      'sidebarTopLeft header sidebarTopRight' 9.6rem
      'sidebarTopLeft profile sidebarTopRight' minmax(auto, 9.6rem)
      'sidebar body aside' 1fr / minmax(2.6rem, 1fr) minmax(auto, 120rem) minmax(2.6rem, 1fr);
  }
`;

const ProfileContainer = styled.div`
  grid-area: profile;
  display: flex;
  gap: 2.6rem;
  background: ${indigoDark.indigo2};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
`;

const SideTopLeft = styled.div`
  grid-area: sidebarTopLeft;
  width: 100%;
`;

const SideTopRight = styled.div`
  grid-area: sidebarTopRight;
  width: 100%;
`;

const HomePage = () => {
  const { isProfileLoading, isConnected, address } = useHausConnect();
  const [daoData, setDaoData] = useState<ITransformedMembership[]>([]);
  const [filterNetworks, setFilterNetworks] = useState<Record<string, string>>(
    Object.keys(networkData).reduce(
      (acc, networkId) => ({ ...acc, [networkId]: networkId }),
      {}
    )
  );
  const [filterDelegate, setFilterDelegate] = useState<string | ''>('');
  const [sortBy, setSortBy] = useState<string>(DEFAULT_SORT_KEY);
  const [searchTerm, setSearchTerm] = useState<string | ''>('');
  const [loading, setLoading] = useState<boolean>(true);

  const debouncedSearchTerm = useDebounce<string>(searchTerm, 1000);

  useEffect(() => {
    const getDaos = async (address: string) => {
      setLoading(true);
      try {
        const haus = Haus.create();

        const query = await haus.profile.listDaosByMember({
          memberAddress: address,
          networkIds: Object.keys(filterNetworks) as ValidNetwork[],
          includeTokens: true,
          daoFilter: { name_contains_nocase: debouncedSearchTerm },
          memberFilter: getDelegateFilter(filterDelegate, address),
          ordering: SORT_FIELDS[sortBy].ordering,
        });

        if (query.data?.daos) {
          setDaoData(query.data.daos);
        }
      } catch (error) {
        error instanceof Error
          ? console.error(error.message)
          : console.error('Well, shit...');
      } finally {
        setLoading(false);
      }
    };

    if (!address) return;
    getDaos(address);
  }, [address, filterNetworks, filterDelegate, sortBy, debouncedSearchTerm]);

  const toggleNetworkFilter = (event: MouseEvent<HTMLButtonElement>) => {
    const network = event.currentTarget.value;
    if (network && isValidNetwork(network)) {
      filterNetworks[network]
        ? setFilterNetworks((prevState) => {
            delete prevState[network];
            return { ...prevState };
          })
        : setFilterNetworks((prevState) => ({
            ...prevState,
            [network]: network,
          }));
    }
  };

  const toggleDelegateFilter = (event: MouseEvent<HTMLButtonElement>) => {
    setFilterDelegate((prevState) =>
      prevState === event.currentTarget.value ? '' : event.currentTarget.value
    );
  };

  const toggleSortBy = (event: MouseEvent<HTMLButtonElement>) => {
    setSortBy((prevState) =>
      prevState === event.currentTarget.value
        ? DEFAULT_SORT_KEY
        : event.currentTarget.value
    );
  };

  const handleSearchTermChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm((prevState) =>
      prevState === event.target.value ? '' : event.target.value
    );
  };

  return (
    <Layout>
      <SideTopLeft />
      <SideTopRight />
      <Header />
      <ProfileContainer>
        <BodyNav />
        {isConnected && !isProfileLoading && <HeaderProfile />}
      </ProfileContainer>
      {isConnected ? (
        <HomeDashboard
          daoData={daoData}
          filterNetworks={filterNetworks}
          toggleNetworkFilter={toggleNetworkFilter}
          filterDelegate={filterDelegate}
          toggleDelegateFilter={toggleDelegateFilter}
          sortBy={sortBy}
          toggleSortBy={toggleSortBy}
          searchTerm={searchTerm}
          setSearchTerm={handleSearchTermChange}
          loading={loading}
        />
      ) : (
        <HomeNotConnected />
      )}
    </Layout>
  );
};

export default HomePage;
