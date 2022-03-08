import {
  formatBlockExplorerTxUrl,
  SquareLink,
  SquareButtonTheme,
  SquareButtonSize
} from '@pooltogether/react-components'
import { useTranslation } from 'react-i18next'
import React from 'react'
import { Transaction } from '@atoms/transactions'

interface TransactionReceiptButtonProps {
  className?: string
  chainId: number
  transaction: Transaction
}

export const TransactionReceiptButton = (props: TransactionReceiptButtonProps) => {
  const { chainId, transaction, className } = props
  const { t } = useTranslation()

  const url = formatBlockExplorerTxUrl(transaction.response.hash, chainId)

  return (
    <SquareLink
      target='_blank'
      href={url}
      theme={SquareButtonTheme.tealOutline}
      size={SquareButtonSize.md}
      className={className}
    >
      {t('viewReceipt', 'View receipt')}
    </SquareLink>
  )
}
