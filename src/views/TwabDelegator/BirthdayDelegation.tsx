import classNames from 'classnames'
import { BirthdayCard } from './BirthdayCard';

export const BirthdayDelegation: React.FC<{ birthdays: any }> = (props) => {
  const {birthdays} = props;

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

      {birthdays.map((person, index) => (
        <BirthdayCard key={`birthday-${index}`} person={person} />
      ))}
      
    </div>
  )
}
