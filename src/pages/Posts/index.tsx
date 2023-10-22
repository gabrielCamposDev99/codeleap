import { ModeToggle } from '@/components/mode-toggle';
import {
  Card, CardContent, CardHeader, CardTitle
} from '@/components/ui/card';
import { UserNav } from '@/components/user-nav';

import { PostCard } from '@/components/post-card';
import { PostForm } from '@/components/post-form';

const PostsView = () => (
  <div>
    <div className=" flex-col md:flex bg-primary hover:bg-primary/90">
      <div className="container">
        <div className="flex min-h-16 items-center px-4">
          <h2 className="py-2 text-3xl font-bold tracking-tight text-slate-100">
            CodeLeap Network
          </h2>
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
          <PostForm />
        </CardContent>
      </Card>
    </div>

    <div className="container flex-col mt-6">
      <PostCard />
    </div>
  </div>
);

export default PostsView;
