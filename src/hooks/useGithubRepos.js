import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => {
  if (!res.ok) {
    throw new Error('An error occurred while fetching the data.');
  }
  return res.json();
});

export const useGithubRepos = (username) => {
  const { data, error, isLoading, mutate } = useSWR(
    username ? `https://api.github.com/users/${username}/repos?sort=updated&per_page=6` : null,
    fetcher,
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: true,
      dedupingInterval: 60000, // Cache for 1 minute
      shouldRetryOnError: false // Don't aggressive retry if API limit hit
    }
  );

  // Filter out forks if needed, or sort by stars
  const sortedRepos = data
    ? [...data].sort((a, b) => b.stargazers_count - a.stargazers_count).slice(0, 3)
    : [];

  return {
    repos: sortedRepos,
    isLoading,
    isError: error,
    mutate
  };
};
