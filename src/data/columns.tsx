export const columnsAcounts = [
  {
    key: 'accountId',
    label: 'Account ID',
    render: (item: any) => item.accountId,
  },
  {
    key: 'email',
    label: 'Email',
    render: (item: any) => item.email,
  },
  {
    key: 'authToken',
    label: 'Auth Token',
    render: (item: any) => item.authToken,
  },
  {
    key: 'creationDate',
    label: 'Creation Date',
    render: (item: any) => item.creationDate,
  },
];

export const columnsProfiles = [
  {
    key: 'profileId',
    label: 'Profile ID',
    render: (item: any) => item.profileId,
  },
  {
    key: 'country',
    label: 'Country',
    render: (item: any) => item.country,
  },
  {
    key: 'marketplace',
    label: 'Marketplace',
    render: (item: any) => item.marketplace,
  },
];
