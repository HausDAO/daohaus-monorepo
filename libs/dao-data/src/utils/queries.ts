const DEFAULT_PROPOSAL_FIELDS = `
  id
  createdAt
  createdBy
  proposalId
  prevProposalId
  proposalDataHash
  proposalData
  details
  title
  proposalType
  contentURI
  contentURIType
  sponsored
  selfSponsor
  sponsor
  votingPeriod
  votingStarts
  votingEnds
  graceEnds
  expiration
  cancelled
  yesBalance
  noBalance
  yesVotes
  noVotes
  processed
  actionFailed
  passed
  proposalOffering
  maxTotalSharesAndLootAtYesVote
  tributeToken
  tributeOffered
  tributeTokenSymbol
  tributeTokenDecimals
  tributeEscrowRecipient
` as const;

const DEAFULT_DAO_FIELDS = `
  id 
  createdAt
  transactionHashSummon
  lootAddress
  safeAddress
  lootPaused
  sharesPaused
  gracePeriod
  votingPeriod
  proposalOffering
  quorumPercent
  sponsorThreshold
  minRetentionPercent
  shareTokenName
  shareTokenSymbol
  totalShares
  totalLoot
  latestSponsoredProposalId
  metaData { 
    name 
  }
` as const;

const DEFAULT_VOTE_FIELDS = `
  id
  createdAt
  daoAddress
  approved
  balance
  member {
    id
    memberAddress
  }
` as const;

const DEFAULT_MEMBER_FIELDS = `
  id
  createdAt
  memberAddress
  shares
  loot
  delegatingTo
  delegateShares
  votes {
    createdAt
    approved
    balance
  }
` as const;

export const DEFAULT_DAO_QUERY = `
  query dao($dao: String!) {
    dao(
      id: $dao
    ) {
      ${DEAFULT_DAO_FIELDS}
    }
  }
` as const;

export const DEFAULT_DAOS_QUERY = `
  query daos($orderBy: String!, $orderDirection: String!) {
    daos (
      orderBy: $orderBy
      orderDirection: $orderDirection 
    ) {
      ${DEAFULT_DAO_FIELDS}
    }
  }
` as const;

export const DEFAULT_PROPOSALS_BY_DAO_QUERY = `
  query proposals($dao: String!, $orderBy: String!, $orderDirection: String!) {
    proposals(
      where: {dao: $dao}
      orderBy: $orderBy
      orderDirection: $orderDirection  
    ) {
      ${DEFAULT_PROPOSAL_FIELDS}
      votes {
        ${DEFAULT_VOTE_FIELDS}
      }
    }
  }
` as const;

export const DEFAULT_PROPOSAL_QUERY = `
  query proposal($id: String!) {
    proposal(id: $id) {
      ${DEFAULT_PROPOSAL_FIELDS}
      votes {
        ${DEFAULT_VOTE_FIELDS}
      }
    }
  }
` as const;

export const DEFAULT_MEMBERS_BY_DAO_QUERY = `
  query members($dao: String!, $orderBy: String!, $orderDirection: String!) {
    members(
      where: {dao: $dao}
      orderBy: $orderBy
      orderDirection: $orderDirection 
    ) {
      ${DEFAULT_MEMBER_FIELDS}
    }
  }
` as const;

export const DEFAULT_MEMBER_QUERY = `
  query member($id: String!) {
    member(id: $id) {
      ${DEFAULT_MEMBER_FIELDS}
    }
  }
` as const;

export const DAOS_BY_MEMBER_QUERY = `
  query members($memberAddress: String!) {
    members(where: {memberAddress: $memberAddress}) {
      ${DEFAULT_MEMBER_FIELDS}
      dao {
        ${DEAFULT_DAO_FIELDS}
      }
    }
  }
` as const;

export const LATEST_TX_BY_DAO = `
  query eventTransactions($dao: String!) {
    eventTransactions(
        first: 1, 
        orderBy: createdAt, 
        orderDirection: desc
        where: { dao: $dao }
    ) {
        id
        createdAt
    }
}
` as const;