import { render, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { mockClipboard } from '../../utils/test-utils';
import { ProfileModal } from '../profile-modal';
import { ConnectButton } from '..';
import { readCopyText } from '../../utils';

describe('ProfileModal', () => {
  let resetMockClipboard: () => void;
  beforeEach(() => {
    resetMockClipboard = mockClipboard();
  });
  afterEach(() => {
    resetMockClipboard();
  });

  it('match snapshot', () => {
    const App = () => (
      <ProfileModal
        open
        __hashId__="hashId"
        address="0x21CDf0974d53a6e96eF05d7B324a9803735fFd3B"
        name="wanderingearth.eth"
        avatar={{
          src: 'https://mdn.alipayobjects.com/huamei_mutawc/afts/img/A*9jfLS41kn00AAAAAAAAAAAAADlrGAQ/original',
        }}
      />
    );
    const { baseElement } = render(<App />);
    expect(baseElement).toMatchSnapshot();
  });

  it('open profile modal in ConnectButton', async () => {
    const App = () => (
      <ConnectButton
        account={{
          address: '0x21CDf0974d53a6e96eF05d7B324a9803735fFd3B',
        }}
      />
    );
    const { baseElement } = render(<App />);
    expect(baseElement.querySelector('.ant-web3-connect-button')).not.toBeNull();

    fireEvent.click(baseElement.querySelector('.ant-web3-connect-button')!);

    await vi.waitFor(() => {
      expect(
        baseElement.querySelector('.ant-web3-connect-button-profile-modal .ant-web3-address')
          ?.textContent,
      ).toBe('0x21CDf0974d53a6e96eF05d7B324a9803735fFd3B');
    });
  });

  it('show balance', async () => {
    const App = () => (
      <ConnectButton
        account={{
          address: '0x21CDf0974d53a6e96eF05d7B324a9803735fFd3B',
        }}
        balance={{
          symbol: 'ETH',
          decimals: 18,
          value: 1230000000000000000n,
        }}
      />
    );
    const { baseElement } = render(<App />);
    expect(baseElement.querySelector('.ant-web3-connect-button')).not.toBeNull();

    fireEvent.click(baseElement.querySelector('.ant-web3-connect-button')!);

    await vi.waitFor(() => {
      expect(
        baseElement.querySelector('.ant-web3-connect-button-profile-modal .ant-web3-address')
          ?.textContent,
      ).toBe(' 1.23 ETH');
    });
  });

  it('Disconnect & Copy Address Button', () => {
    const disconnectTestFn = vi.fn();
    const App = () => (
      <ProfileModal
        open
        __hashId__="hashId"
        address="0x21CDf0974d53a6e96eF05d7B324a9803735fFd3B"
        onDisconnect={disconnectTestFn}
      />
    );
    const { baseElement } = render(<App />);
    const btns = baseElement.querySelectorAll('.ant-web3-connect-button-profile-modal .ant-btn');
    expect(btns.length).toBe(2);
    fireEvent.click(btns[1]);
    expect(disconnectTestFn).toBeCalled();
    fireEvent.click(btns[0]);
    expect(readCopyText()).resolves.toBe('0x21CDf0974d53a6e96eF05d7B324a9803735fFd3B');
  });
  it('should not display modal when pass false into profileModal', async () => {
    const App = () => (
      <ConnectButton
        account={{
          address: '0x21CDf0974d53a6e96eF05d7B324a9803735fFd3B',
        }}
        profileModal={false}
      />
    );
    const { baseElement } = render(<App />);
    fireEvent.click(baseElement.querySelector('.ant-web3-connect-button')!);
    await vi.waitFor(() => {
      expect(baseElement.querySelector('.ant-web3-connect-button-profile-modal')).toBeNull();
    });
  });
  it('profile modal should customize by profileModal', async () => {
    const App = () => (
      <ConnectButton
        account={{
          address: '0x21CDf0974d53a6e96eF05d7B324a9803735fFd3B',
        }}
        profileModal={{
          title: 'Custom Title',
          footer: 'Custom Description',
          width: 500,
        }}
      />
    );
    const { baseElement } = render(<App />);
    fireEvent.click(baseElement.querySelector('.ant-web3-connect-button')!);
    await vi.waitFor(() => {
      expect(baseElement.querySelector('.ant-web3-connect-button-profile-modal')).not.toBeNull();
      expect(
        baseElement.querySelector('.ant-web3-connect-button-profile-modal .ant-modal-title')
          ?.textContent,
      ).toBe('Custom Title');
      expect(
        baseElement.querySelector('.ant-web3-connect-button-profile-modal .ant-modal-footer')
          ?.textContent,
      ).toBe('Custom Description');
      expect(
        baseElement
          .querySelector('.ant-web3-connect-button-profile-modal.ant-modal')
          ?.getAttribute('style'),
      ).toContain('width: 500px;');
    });
  });
});