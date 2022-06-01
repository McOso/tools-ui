import { useQuery } from 'react-query'
import { OTHER_API_KEYS } from '@constants/config'
import Airtable from 'airtable'

/**
 *
 * @param 
 * @returns
 */
export const useBirthdays = () => {
  return useQuery(
    ['useBirthdays'],
    async () => getBirthdays(),
    {
      refetchInterval: false,
      refetchIntervalInBackground: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false
    }
  )
}

/**
 * @param 
 * @returns
 */
const getBirthdays = async () => {
  const base = new Airtable({apiKey: OTHER_API_KEYS.airtable}).base('appxn1gsP3Fl7zSZl');

  const date = new Date();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  let resultArr = [];

  const filterString = `AND({BirthMonth} = '${month}', {BirthDate} = '${day}')`
  // const filterString = "AND({BirthMonth} = '6', {BirthDate} = '1')"

  await base('Birthdays').select({
    // Selecting the first 3 records in Grid view:
    filterByFormula: filterString
  }).eachPage(function page(records, fetchNextPage) {
    // This function (`page`) will get called for each page of records.

    records.forEach(function(record) {
        console.log('Retrieved', record.get('Name'));
        resultArr.push(record)
    });

    // To fetch the next page of records, call `fetchNextPage`.
    // If there are more records, `page` will get called again.
    // If there are no more records, `done` will get called.
    fetchNextPage();

  });

  return resultArr;
}

