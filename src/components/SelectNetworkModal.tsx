import React from 'react'
import { BottomSheet, NetworkIcon } from '@pooltogether/react-components'
import { getNetworkNiceNameByChainId } from '@pooltogether/utilities'

import classNames from 'classnames'
import { useTranslation } from 'react-i18next'
import { Label } from './Label'

interface SelectNetworkModalProps {
  isOpen: boolean
  title?: string
  label: string
  description: string
  selectedChainId: number
  chainIds: number[]
  setSelectedChainId: (chainId: number) => void
  setIsOpen: (isOpen: boolean) => void
}

export const SelectNetworkModal: React.FC<SelectNetworkModalProps> = (props) => {
  const {
    label,
    selectedChainId,
    description,
    title,
    setSelectedChainId,
    chainIds,
    isOpen,
    setIsOpen
  } = props

  const { t } = useTranslation()

  return (
    <BottomSheet
      label={label}
      open={isOpen}
      onDismiss={() => setIsOpen(false)}
      maxWidthClassName='max-w-md'
    >
      <h6 className='text-center uppercase text-sm mb-3'>{title || t('chooseANetwork')}</h6>
      <p className='max-w-xs mx-auto text-xs mb-12 text-center'>{description}</p>

      <ul className='space-y-2 mx-auto max-w-sm'>
        {chainIds.map((chainId) => (
          <NetworkItem
            key={chainId}
            chainId={chainId}
            isSelected={chainId === selectedChainId}
            onDismiss={() => setIsOpen(false)}
            setSelectedChainId={setSelectedChainId}
          />
        ))}
      </ul>
    </BottomSheet>
  )
}

const NetworkItem = (props: {
  chainId: number
  isSelected: boolean
  onDismiss: () => void
  setSelectedChainId: (chainId: number) => void
}) => {
  const { chainId, isSelected, setSelectedChainId, onDismiss } = props
  return (
    <li>
      <button
        onClick={() => {
          setSelectedChainId(chainId)
          onDismiss()
        }}
        className={classNames(
          'bg-pt-purple-lighter dark:bg-pt-purple-darker rounded-lg p-4 flex items-center w-full transition-colors',
          'border  hover:border-highlight-1',
          {
            'border-default': isSelected,
            'border-transparent': !isSelected
          }
        )}
      >
        <NetworkIcon chainId={chainId} className='mx-1' sizeClassName='w-5 h-5 mr-2' />
        <span className='capitalize leading-none tracking-wider font-bold text-lg'>
          {getNetworkNiceNameByChainId(chainId)}
        </span>
      </button>
    </li>
  )
}
