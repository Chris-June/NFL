import React, { useEffect, useState } from 'react';

interface SocialPost {
  id: string;
  platform: 'twitter' | 'instagram' | 'facebook';
  content: string;
  author: {
    name: string;
    handle: string;
    avatar: string;
    verified: boolean;
  };
  timestamp: string;
  likes: number;
  shares: number;
  media?: {
    type: 'image' | 'video';
    url: string;
  }[];
}

interface SocialFeedWidgetProps {
  teamId: string;
  apiKeys: {
    twitter?: string;
    instagram?: string;
    facebook?: string;
  };
  platforms?: ('twitter' | 'instagram' | 'facebook')[];
}

export function SocialFeedWidget({ teamId, apiKeys, platforms = ['twitter'] }: SocialFeedWidgetProps) {
  const [posts, setPosts] = useState<SocialPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<string>(platforms[0]);

  useEffect(() => {
    const fetchSocialFeed = async () => {
      try {
        const allPosts: SocialPost[] = [];

        // Fetch from selected platforms
        for (const platform of platforms) {
          if (!apiKeys[platform]) continue;

          // Replace with actual social media API endpoints
          const endpoint = {
            twitter: 'https://api.twitter.com/2/tweets',
            instagram: 'https://graph.instagram.com/me/media',
            facebook: 'https://graph.facebook.com/v12.0/me/posts'
          }[platform];

          const response = await fetch(`${endpoint}?team=${teamId}`, {
            headers: {
              'Authorization': `Bearer ${apiKeys[platform]}`,
              'Content-Type': 'application/json'
            }
          });

          if (!response.ok) {
            throw new Error(`Failed to fetch ${platform} feed`);
          }

          const data = await response.json();
          allPosts.push(...data.posts);
        }

        // Sort posts by timestamp
        const sortedPosts = allPosts.sort((a, b) => 
          new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
        );

        setPosts(sortedPosts);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchSocialFeed();
  }, [teamId, apiKeys, platforms]);

  if (loading) {
    return (
      <div className="animate-pulse bg-gray-100 rounded-lg p-4">
        <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
        <div className="h-4 bg-gray-200 rounded w-1/2"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 text-red-600 p-4 rounded-lg">
        <p>Unable to load social feed</p>
      </div>
    );
  }

  const filteredPosts = selectedPlatform === 'all'
    ? posts
    : posts.filter(post => post.platform === selectedPlatform);

  return (
    <div className="bg-white shadow rounded-lg p-4">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Social Feed</h3>
        <select
          className="border rounded p-1"
          value={selectedPlatform}
          onChange={(e) => setSelectedPlatform(e.target.value)}
        >
          <option value="all">All Platforms</option>
          {platforms.map(platform => (
            <option key={platform} value={platform}>
              {platform.charAt(0).toUpperCase() + platform.slice(1)}
            </option>
          ))}
        </select>
      </div>

      <div className="space-y-4">
        {filteredPosts.map((post) => (
          <div
            key={post.id}
            className="border rounded p-4 hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-center mb-3">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-10 h-10 rounded-full"
              />
              <div className="ml-3">
                <div className="flex items-center">
                  <p className="font-medium">{post.author.name}</p>
                  {post.author.verified && (
                    <svg className="w-4 h-4 ml-1 text-blue-500" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                    </svg>
                  )}
                </div>
                <p className="text-sm text-gray-500">@{post.author.handle}</p>
              </div>
            </div>

            <p className="mb-3">{post.content}</p>

            {post.media && post.media.length > 0 && (
              <div className="mb-3">
                {post.media.map((item, index) => (
                  item.type === 'image' ? (
                    <img
                      key={index}
                      src={item.url}
                      alt="Post media"
                      className="rounded-lg max-h-96 w-full object-cover"
                    />
                  ) : (
                    <video
                      key={index}
                      src={item.url}
                      controls
                      className="rounded-lg max-h-96 w-full"
                    />
                  )
                ))}
              </div>
            )}

            <div className="flex items-center text-sm text-gray-500">
              <span>{new Date(post.timestamp).toLocaleDateString()}</span>
              <span className="mx-2">•</span>
              <span>{post.likes} likes</span>
              <span className="mx-2">•</span>
              <span>{post.shares} shares</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
