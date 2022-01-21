import handleFetch from './fetch';

/**
 * Confirm if a user wants to delete an object and sends
 * the DELETE request if confirmation is accepted.
 *
 * @param confirmationMessage Alert confirmation message
 * @param url Url to make the DELETE request to
 */
const handleDelete = (confirmationMessage: string, url: string) => {
  const confirmation = confirm(confirmationMessage);

  if (confirmation) {
    handleFetch({
      url,
      method: 'DELETE',
      includeToken: true,
    })
      .then(() => alert('Deleted!\nRefresh page to see the changes.'))
      .catch(() => alert('Ops! Something went wrong there'));
  }
};

export default handleDelete;
