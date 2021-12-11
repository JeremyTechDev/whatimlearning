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
    fetch(url, {
      method: 'DELETE',
      headers: {
        Authorization: `Token ${localStorage.getItem('auth-token')}`,
      },
    })
      .then((res) => {
        if (res.status === 204) {
          alert('Deleted!\nRefresh page to see the changes.');
        }
      })
      .catch((e) => console.error(e));
  }
};

export default handleDelete;
