import { Avatar, VStack, Text } from '@chakra-ui/react';
import React from 'react';

const UserDetails = ({ user }) => {
  return (
    <VStack align="start" spacing={4} mt={4}>
      <Avatar size="xl" name={user.login} src={user.avatar_url} />
      <Text fontSize="xl" fontWeight="bold">
        User Details:
      </Text>
      <Text>
        <strong>Login:</strong> {user.login}
      </Text>
      <Text>
        <strong>Name:</strong> {user.name || 'Not available'}
      </Text>
      <Text>
        <strong>Followers:</strong> {user.followers}
      </Text>
      <Text>
        <strong>Following:</strong> {user.following}
      </Text>
      <Text>
        <strong>Public Repositories:</strong> {user.public_repos}
      </Text>
      <Text>
        <strong>Public Gists:</strong> {user.public_gists}
      </Text>
      <Text>
        <strong>Private Gists:</strong> {user.private_gists}
      </Text>
      <Text>
        <strong>Total Private Repositories:</strong> {user.total_private_repos}
      </Text>
      <Text>
        <strong>Owned Private Repositories:</strong> {user.owned_private_repos}
      </Text>
      <Text>
        <strong>Collaborators:</strong> {user.collaborators}
      </Text>
      <Text>
        <strong>Two-Factor Authentication:</strong>{' '}
        {user.two_factor_authentication ? 'Enabled' : 'Disabled'}
      </Text>
      <Text>
        <strong>Created At:</strong> {new Date(user.created_at).toLocaleDateString()}
      </Text>
      <Text>
        <strong>Updated At:</strong> {new Date(user.updated_at).toLocaleDateString()}
      </Text>
      <Text>
        <strong>Disk Usage:</strong> {user.disk_usage} bytes
      </Text>
      {user.plan && (
        <Text>
          <strong>Plan:</strong> {user.plan.name} (Space: {user.plan.space}, Private Repos: {user.plan.private_repos}, Collaborators: {user.plan.collaborators})
        </Text>
      )}
    </VStack>
  );
};

export default UserDetails;
