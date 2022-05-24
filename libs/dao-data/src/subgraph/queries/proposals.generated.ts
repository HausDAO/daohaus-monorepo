import * as Types from '../schema.generated';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type ListProposalsQueryVariables = Types.Exact<{
  where?: Types.Proposal_Filter;
  skip?: Types.Scalars['Int'];
  first?: Types.Scalars['Int'];
  orderBy?: Types.Proposal_OrderBy;
  orderDirection?: Types.OrderDirection;
}>;

export type ListProposalsQuery = {
  proposals: Array<{
    id: string;
    createdAt: string;
    createdBy: string;
    proposalId: string;
    prevProposalId: string;
    proposalDataHash: string;
    proposalData: string;
    details: string;
    title: string | undefined;
    description: string | undefined;
    proposalType: string;
    contentURI: string | undefined;
    contentURIType: string | undefined;
    sponsored: boolean;
    selfSponsor: boolean;
    sponsor: string;
    votingPeriod: string;
    votingStarts: string;
    votingEnds: string;
    graceEnds: string;
    expiration: string;
    cancelled: boolean;
    yesBalance: string;
    noBalance: string;
    yesVotes: string;
    noVotes: string;
    processed: boolean;
    actionFailed: boolean;
    passed: boolean;
    proposalOffering: string;
    maxTotalSharesAndLootAtYesVote: string;
    tributeToken: string | undefined;
    tributeOffered: string | undefined;
    tributeTokenSymbol: string | undefined;
    tributeTokenDecimals: string | undefined;
    tributeEscrowRecipient: string | undefined;
    votes:
      | Array<{
          id: string;
          createdAt: string;
          daoAddress: string;
          approved: boolean;
          balance: string;
          member: { id: string; memberAddress: string };
        }>
      | undefined;
  }>;
};

export type FindProposalQueryVariables = Types.Exact<{
  id: Types.Scalars['ID'];
}>;

export type FindProposalQuery = {
  proposal:
    | {
        id: string;
        createdAt: string;
        createdBy: string;
        proposalId: string;
        prevProposalId: string;
        proposalDataHash: string;
        proposalData: string;
        details: string;
        title: string | undefined;
        description: string | undefined;
        proposalType: string;
        contentURI: string | undefined;
        contentURIType: string | undefined;
        sponsored: boolean;
        selfSponsor: boolean;
        sponsor: string;
        votingPeriod: string;
        votingStarts: string;
        votingEnds: string;
        graceEnds: string;
        expiration: string;
        cancelled: boolean;
        yesBalance: string;
        noBalance: string;
        yesVotes: string;
        noVotes: string;
        processed: boolean;
        actionFailed: boolean;
        passed: boolean;
        proposalOffering: string;
        maxTotalSharesAndLootAtYesVote: string;
        tributeToken: string | undefined;
        tributeOffered: string | undefined;
        tributeTokenSymbol: string | undefined;
        tributeTokenDecimals: string | undefined;
        tributeEscrowRecipient: string | undefined;
        votes:
          | Array<{
              id: string;
              createdAt: string;
              daoAddress: string;
              approved: boolean;
              balance: string;
              member: { id: string; memberAddress: string };
            }>
          | undefined;
      }
    | undefined;
};

export const ListProposalsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'listProposals' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'where' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'Proposal_filter' },
            },
          },
          defaultValue: { kind: 'ObjectValue', fields: [] },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'skip' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
          defaultValue: { kind: 'IntValue', value: '0' },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'first' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
          defaultValue: { kind: 'IntValue', value: '100' },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'orderBy' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'Proposal_orderBy' },
            },
          },
          defaultValue: { kind: 'EnumValue', value: 'id' },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'orderDirection' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'OrderDirection' },
            },
          },
          defaultValue: { kind: 'EnumValue', value: 'asc' },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'proposals' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'where' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'skip' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'skip' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'first' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'first' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'orderBy' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'orderBy' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'orderDirection' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'orderDirection' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
                { kind: 'Field', name: { kind: 'Name', value: 'createdBy' } },
                { kind: 'Field', name: { kind: 'Name', value: 'proposalId' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'prevProposalId' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'proposalDataHash' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'proposalData' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'details' } },
                { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                { kind: 'Field', name: { kind: 'Name', value: 'description' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'proposalType' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'contentURI' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'contentURIType' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'sponsored' } },
                { kind: 'Field', name: { kind: 'Name', value: 'selfSponsor' } },
                { kind: 'Field', name: { kind: 'Name', value: 'sponsor' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'votingPeriod' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'votingStarts' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'votingEnds' } },
                { kind: 'Field', name: { kind: 'Name', value: 'graceEnds' } },
                { kind: 'Field', name: { kind: 'Name', value: 'expiration' } },
                { kind: 'Field', name: { kind: 'Name', value: 'cancelled' } },
                { kind: 'Field', name: { kind: 'Name', value: 'yesBalance' } },
                { kind: 'Field', name: { kind: 'Name', value: 'noBalance' } },
                { kind: 'Field', name: { kind: 'Name', value: 'yesVotes' } },
                { kind: 'Field', name: { kind: 'Name', value: 'noVotes' } },
                { kind: 'Field', name: { kind: 'Name', value: 'processed' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'actionFailed' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'passed' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'proposalOffering' },
                },
                {
                  kind: 'Field',
                  name: {
                    kind: 'Name',
                    value: 'maxTotalSharesAndLootAtYesVote',
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'tributeToken' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'tributeOffered' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'tributeTokenSymbol' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'tributeTokenDecimals' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'tributeEscrowRecipient' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'votes' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'createdAt' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'daoAddress' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'approved' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'balance' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'member' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'id' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'memberAddress' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ListProposalsQuery, ListProposalsQueryVariables>;
export const FindProposalDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'findProposal' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'proposal' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'id' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
                { kind: 'Field', name: { kind: 'Name', value: 'createdBy' } },
                { kind: 'Field', name: { kind: 'Name', value: 'proposalId' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'prevProposalId' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'proposalDataHash' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'proposalData' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'details' } },
                { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                { kind: 'Field', name: { kind: 'Name', value: 'description' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'proposalType' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'contentURI' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'contentURIType' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'sponsored' } },
                { kind: 'Field', name: { kind: 'Name', value: 'selfSponsor' } },
                { kind: 'Field', name: { kind: 'Name', value: 'sponsor' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'votingPeriod' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'votingStarts' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'votingEnds' } },
                { kind: 'Field', name: { kind: 'Name', value: 'graceEnds' } },
                { kind: 'Field', name: { kind: 'Name', value: 'expiration' } },
                { kind: 'Field', name: { kind: 'Name', value: 'cancelled' } },
                { kind: 'Field', name: { kind: 'Name', value: 'yesBalance' } },
                { kind: 'Field', name: { kind: 'Name', value: 'noBalance' } },
                { kind: 'Field', name: { kind: 'Name', value: 'yesVotes' } },
                { kind: 'Field', name: { kind: 'Name', value: 'noVotes' } },
                { kind: 'Field', name: { kind: 'Name', value: 'processed' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'actionFailed' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'passed' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'proposalOffering' },
                },
                {
                  kind: 'Field',
                  name: {
                    kind: 'Name',
                    value: 'maxTotalSharesAndLootAtYesVote',
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'tributeToken' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'tributeOffered' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'tributeTokenSymbol' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'tributeTokenDecimals' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'tributeEscrowRecipient' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'votes' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'createdAt' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'daoAddress' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'approved' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'balance' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'member' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'id' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'memberAddress' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<FindProposalQuery, FindProposalQueryVariables>;
