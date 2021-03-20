const fetchUserNotifications = async (token) =>
  await (
    await fetch('/api/v1/notification/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
  ).json();

const fetchDeleteUserNotification = async (id, token) =>
  await (
    await fetch(`/api/v1/notification/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
  ).json();

const fetchUserNotificationsCount = async (token) =>
  await (
    await fetch('/api/v1/notification/count', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
  ).json();

export { fetchUserNotifications, fetchDeleteUserNotification, fetchUserNotificationsCount };
