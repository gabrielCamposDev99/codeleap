import { cn } from '@/lib/utils';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { Button } from './ui/button';

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export const UserAuthForm = ({ className, ...props }: UserAuthFormProps) => (
  <div className={cn('grid gap-6', className)} {...props}>
    <form>
      <div className="grid gap-2">
        <div className="grid gap-1">
          <Label className="sr-only" htmlFor="username">
            Username
          </Label>
          <Input
            required
            id="username"
            placeholder="John doe"
            autoCapitalize="none"
            autoCorrect="off"
          />
        </div>
        <Button>Sign In with Username</Button>
      </div>
    </form>
  </div>
);
