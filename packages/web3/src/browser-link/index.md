---
nav: Components
group: Display
---

# BrowserLink

a quick way to use etherscan address.

## Basic Usage

<code src="./demos/basic.tsx"></code>

## Complex Usage

<code src="./demos/complex.tsx"></code>

## Custom Name

<code src="./demos/customName.tsx"></code>

## API

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| `icon` | Icon property, can be a boolean value or a custom React node. | `boolean \| React.ReactNode` | - | - |
| `iconOnly` | Whether to display only the icon. | `boolean` | `false` | - |
| `ellipsis` | Whether to enable ellipsis for displaying Ethereum addresses. | `boolean` | - | - |
| `address` | Ethereum address to generate the link. | `string` | - | - |
| `href` | Custom link target. If provided, it will override the generated link. | `string` | - | - |
| `type` | The type of link, either 'address' (default) or 'transaction'. | `address \| transaction` | `address` | - |
| `chain` | Ethereum chain identifier. Defaults to the mainnet. | `ChainIds` | `ChainIds.Mainnet` | - |
| `name` | Custom display name. Display `address` default. | `string` | - | - |