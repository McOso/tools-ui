import classNames from 'classnames'

export const BirthdayCard: React.FC<{ birthdays: any }> = (props) => {

  const {birthdays} = props;

  return (
    <div
      className={classNames(
        'rounded-lg py-8 px-4 xs:px-20 text-center flex-col items-center bg-darkened'
      )}
    >
      <p className='text-pt-purple-dark dark:text-pt-purple-light mb-2'>
        Birthday card
      </p>
      {birthdays.map((person, index) => (
        <div key={`birthday-${index}`}>
          <p>{person.fields.Name}</p>
          <p>{person.fields.DiscordUsername}</p>
          <p>{person.fields.WalletAddress}</p>
        </div>
      ))}
    </div>
  )
}
