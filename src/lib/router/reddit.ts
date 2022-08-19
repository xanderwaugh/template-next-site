import axios from "axios";

const getTopRedditPosts = async () => {
  const res = await axios.get(
    "https://www.reddit.com/top.json"
  );
  const data: RedditAPIData = await res.data;
  const posts = data.data.children.map((post) => post.data);

  return {
    posts,
  };
};

export { getTopRedditPosts };

type RedditAPIData = {
  kind: string;
  data: {
    children: RedditPost[];
  };
};

type RedditPost = {
  kind: string;
  data: {
    title: string;
    subreddit: string;
    author_fullname: string;
    ups: number;
    downs: number;
    thumbnail_height: number;
    thumbnail_width: number;
    thumbnail: string;
    secure_media: {
      reddit_video: {
        fallback_url: string;
        height: number;
        width: number;
        scrubber_media_url: string;
      };
    };
  };
};
