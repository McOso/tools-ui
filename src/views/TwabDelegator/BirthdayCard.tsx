import classNames from 'classnames'

export const BirthdayCard: React.FC<{ person: any }> = (props) => {

  const {person} = props;

  return (
    <div
      className={classNames(
        'rounded-lg py-8 px-4 xs:px-20 text-center flex-col items-center bg-darkened'
      )}
    >
      <p>{person.fields.Name}</p>
      <p>{person.fields.DiscordUsername}</p>
      <p>{person.fields.WalletAddress}</p>
    </div>
  )
}
