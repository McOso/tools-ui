import classNames from 'classnames'
import { BirthdayCard } from './BirthdayCard';
import { useBirthdays } from './hooks/useBirthdays'

export const BirthdayDelegation: React.FC<{ className?: string }> = (props) => {
  const birthdaysToday = useBirthdays();

  return (
    <div
      className={classNames(
        'rounded-lg py-8 px-4 xs:px-20 text-center flex-col items-center bg-darkened'
      )}
    >
      <p className='text-pt-purple-dark dark:text-pt-purple-light mb-2'>
        Testing first
      </p>
      <p className='font-bold mb-1'>Testing here:</p>
      More testing

    {birthdaysToday.status === "loading" ? (<p>loading ...</p>) : birthdaysToday.status === "error" ? (
          <span> Error: {JSON.stringify(birthdaysToday.error)}</span>
        ) : <BirthdayCard birthdays={birthdaysToday.data} /> }
      
    </div>
  )
}
