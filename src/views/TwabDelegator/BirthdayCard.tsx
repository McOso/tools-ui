import { SquareButton, SquareButtonSize } from '@pooltogether/react-components';
import classNames from 'classnames'
import _ from 'lodash'
import FeatherIcon from 'feather-icons-react'

export const BirthdayCard: React.FC<{ person: any }> = (props) => {

  const {person} = props;

  return (
    <div
      className={classNames(
        'rounded-lg py-4 px-4 xs:px-20 text-center flex-col items-center bg-darkened'
      )}
    >
      <p>{person.fields.Name}</p>
      <p>{person.fields.DiscordUsername}</p>
      <p>{_.truncate(person.fields.WalletAddress, {length: 18})}</p>

      <SquareButton
        size={SquareButtonSize.sm}
        className='w-full'
        onClick={() => {copy(person.fields.WalletAddress)}}
      >
        <FeatherIcon icon='clipboard' strokeWidth={4} className='w-4 h-4 my-auto mr-1' />
        <span>Copy Address</span>
      </SquareButton>
    </div>
  )
}

const copy = (addy: string) => {
  navigator.clipboard.writeText(addy);
}