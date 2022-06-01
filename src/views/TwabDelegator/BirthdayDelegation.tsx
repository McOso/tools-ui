import classNames from 'classnames'
import { BirthdayCard } from './BirthdayCard';

export const BirthdayDelegation: React.FC<{ birthdays: any }> = (props) => {
  const {birthdays} = props;

  return (
    <div
      className={classNames(
        'rounded-lg my-4 py-8 px-4 xs:px-20 text-center flex-col items-center bg-pt-purple-dark'
      )}
    >
      <p className='text-pt-purple-dark dark:text-pt-purple-light mb-2'>
        🎊🎁 BIRTHDAY TODAY 🎁🎊
      </p>
      <p className='font-bold mb-1'>Delegate to Community Members for their Birthday</p>

      {birthdays.map((person, index) => (
        <BirthdayCard key={`birthday-${index}`} person={person} />
      ))}
      
    </div>
  )
}
