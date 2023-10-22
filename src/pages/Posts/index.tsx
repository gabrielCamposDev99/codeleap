import { ModeToggle } from '@/components/mode-toggle';
import { UserNav } from '@/components/user-nav';

const PostsView = () => (
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
);

export default PostsView;
