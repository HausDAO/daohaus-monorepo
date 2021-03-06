# Libs

Our libraries in the `libs` folder are structured to be consumed by our apps as well as used by external developers using our tooling. Currently, we have three categories of libraries:

- **Utility Libraries**: These are libraries that are used to provide foundational utility that can be composed and integrated into applications.
  - Helm Chart Infrastructure Playbook
  - DAO Data SDK
  - Component Library
- **Feature Libraries**: These compose together other libraries such as the _DAO Data SDK_ and the _Component Library_ to create "smart components" that can be integrated into applications.
  - DAOhaus Connect
  - Tx Builder

## DAO Data SDK

Our [DAO Data SDK](./dao-data) is a library that provides a set of functions for interacting with the DAO data. This includes querying subgraphs, querying our jobs, and other tools.

## Common Utilities

Our [Common Utilities](./common-utilities) is a set of helper tools and utilities that are used throughout our libraries and apps. This includes things that are commonly shared across packages, and various utilities and helper functions.

## Component Library (UI)

Our [Component Library (UI)](./ui) is a set of React components with TypeScript leveraging [Radix UI](https://www.radix-ui.com/) primitives. This library roughly follows [Atomic Design principles](https://bradfrost.com/blog/post/atomic-web-design/), and are intended to be composed together to build application UI.

This library includes a [Storybook](https://storybook.js.org/) as well and is intended for use by the larger DAOhaus community. Since we "dogfood" our own package development we're continually adding to this library as we surface new components.

## DAOhaus Connect

[DAOhaus Connect](./daohaus-connect-feature) is our first feature library. Our feature libraries are a step beyond our component library, and either include additional functionality or leverage the DAO Data SDK to create "smart components." DAOhaus Connect provides a drop-in component for handling wallet connection, and includes additional functionality such as notifying users of unsupported networks, switching networks, and displaying basic [Ceramic profile](https://ceramic.network/) data if the user has one set.

This is used throughout our applications and is designed to be leveraged by the larger DAOhaus community as a portal into the DAOhaus ecosystem.

## Tx Builder

[Tx Builder](./tx-builder-feature) is a feature library that provides a React component specifically intended to help users build transactions. Transactions are at the core of our platform, so we designed this library to provide helper utilities for this purpose. This library is an evolution of the patterns utilized in DAOhaus v2.

The core element is that its a React Context that bundles together generic transaction calls with subgraph polling within the function. This provides lifecycle methods that we can use to control UI based on synchronized events from within the React component.

## Helm Chart Infrasstruction Playbook

[Helm Chart Infrastructure Playbook](./infra-chart)

More details coming soon!
