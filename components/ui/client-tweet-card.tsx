"use client";
import { TweetProps, useTweet } from "react-tweet";
import type { Tweet } from "react-tweet/api";

import { MagicTweet, TweetNotFound, TweetSkeleton } from "@/components/ui/tweet-card";

export interface ClientTweetCardProps extends TweetProps {
  className?: string;
  staticTweet?: Tweet;
}

export const ClientTweetCard = ({
  id,
  apiUrl,
  fallback = <TweetSkeleton />,
  components,
  fetchOptions,
  onError,
  className,
  staticTweet,
  ...props
}: ClientTweetCardProps) => {
  const { data, error, isLoading } = useTweet(id, apiUrl, fetchOptions);

  if (isLoading) return fallback;

  if (error || !data) {
    if (staticTweet) {
      if (error && onError) {
        onError(error);
      }
      return <MagicTweet tweet={staticTweet} className={className} {...props} />;
    }

    const NotFound = components?.TweetNotFound ?? TweetNotFound;
    const resolvedError = error && onError ? onError(error) : error;

    return (
      <NotFound className={className} error={resolvedError} {...props}>
        See why operators choose Devonel in our latest field notes.
      </NotFound>
    );
  }

  return <MagicTweet tweet={data} className={className} {...props} />;
};

