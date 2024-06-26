---
nav: 组件
subtitle: 比特币
order: 1
group:
  title: 连接链
  order: 2
tag:
  title: 新增
  color: success
---

# Bitcoin

Ant Design Web3 官方提供了 `@ant-design/web3-bitcoin` 来适配比特币，它为 `@ant-design/web3` 的组件提供了连接比特币链的能力。通过它，你不需要自己处理组件的连接状态，链数据请求等逻辑。它会通过 [Web3ConfigProvider](../web3-config-provider/index.zh-CN.md) 为组件提供相关全局状态和接口。

目前支持连接 Xverse / Unisat 钱包。未来会支持 [StandardWallet](https://github.com/ExodusMovement/bitcoin-wallet-standard) 协议及更多常用钱包。

`useBitcoinWallet` 暴露出了诸如签名、交易等通用的方法, 可以直接调用；也可以通过 `provider` 直接调用钱包的 API，定制化处理各个钱包逻辑。

未来会支持其他如 PSBT 等方法，欢迎给我们提交 GitHub issue 或 PR 支持。当前可以通过 provider 实现相关逻辑。

## 连接钱包

<code src="./demos/basic.tsx"></code>

## 使用 signMessage 签名

<code src="./demos/sign-message.tsx"></code>

## 使用 sendBitcoin 发送交易

<code src="./demos/send-transfer.tsx"></code>

## 使用 unisat 查看 Ordinals 铭文

<code src="./demos/get-inscriptions.tsx"></code>

## API

### BitcoinWeb3ConfigProvider

| 属性 | 描述 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| balance | 是否显示余额 | `boolean` | `false` | - |
| wallets | 可用的钱包 | `WalletFactory[]` | - | - |
| locale | 多语言设置 | [Locale](https://github.com/ant-design/ant-design-web3/blob/main/packages/common/src/locale/zh_CN.ts) | - | - |

### useBitcoinWallet

#### result

| 参数         | 描述                             | 类型                                  |
| ------------ | -------------------------------- | ------------------------------------- |
| name         | 当前连接的钱包名称               | `string`                              |
| provider     | 获取当前连接钱包的 provider 对象 | `any`                                 |
| account      | 账户地址                         | `string`                              |
| connect      | 连接钱包                         | `() => Promise<void>`                 |
| getBalance   | 获取钱包余额                     | `() => Promise<Balance \| undefined>` |
| signMessage  | 签名                             | `() => Promise<string \| undefined>`  |
| sendTransfer | 发送交易                         | `() => Promise<string \| undefined>`  |
