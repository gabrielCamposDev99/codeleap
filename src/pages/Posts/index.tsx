import { ModeToggle } from '@/components/mode-toggle';
import {
  Card, CardContent, CardHeader, CardTitle
} from '@/components/ui/card';
import { UserNav } from '@/components/user-nav';

import { PostCard } from '@/components/post-card';
import { usePosts } from '@/actions/api/postsApi/usePosts';
import List from '@/components/list';
import { PostType } from '@/validation/interfaces/IPost';
import { CreatePostForm } from '@/components/forms/post/create-post-form';

const PostsView = () => {
  const { posts } = usePosts();
  return (
    <div>
      <div className=" flex-col md:flex bg-primary hover:bg-primary/90">
        <div className="container">
          <div className="flex min-h-16 items-center px-4">
            <a href="https://codeleap.co.uk/" target="_blank" rel="noreferrer">
              <h2 className="py-4 text-3xl font-bold tracking-tight text-slate-100">
                CodeLeap Network
              </h2>
            </a>
            <div className="ml-auto flex items-center space-x-4">
              <ModeToggle />

              <UserNav />
            </div>
          </div>
        </div>
      </div>
      <div className="container flex-col mt-6">
        <Card>
          <CardHeader>
            <CardTitle>What’s on your mind?</CardTitle>
          </CardHeader>
          <CardContent>
            <CreatePostForm />
          </CardContent>
        </Card>
      </div>

      <div className="container flex-col mt-6">
        <List
          data={posts?.results}
          render={(post: PostType) => <PostCard {...post} key={post.id} />}
        />
      </div>
    </div>
  );
};

export default PostsView;
