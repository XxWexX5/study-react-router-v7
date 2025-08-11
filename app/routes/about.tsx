import type { Route } from './+types/about';

interface GitHubUser {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  user_view_type: string;
  site_admin: boolean;
}

export async function loader() {
  const data = await fetch('https://api.github.com/users');
  const users = (await data.json()) as GitHubUser[];

  return users;
}

export default function Index({ loaderData }: Route.ComponentProps) {
  console.log(loaderData);

  return (
    <ul>
      {loaderData.map((user: GitHubUser) => (
        <li key={user.id}>
          <img src={user.avatar_url} alt={`Avatar de ${user.login}`} />
        </li>
      ))}
    </ul>
  );
}
