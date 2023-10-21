import { cn } from '@/lib/utils';
import { buttonVariants } from './components/ui/button';
import { UserAuthForm } from './components/user-auth-form';
import { ModeToggle } from './components/mode-toggle';

const App = () => (
  <>
    <div className="md:hidden" />
    <div className="container min-h-screen h-full relative flex-col items-center justify-center grid md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <div
        className={cn(
          buttonVariants({ variant: 'ghost' }),
          'absolute right-4 top-4 md:right-8 md:top-8'
        )}
      >
        <ModeToggle />
      </div>
      <div className="relative hidden min-h-screen h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
        <div className="absolute inset-0 bg-zinc-400" />
        <div className="relative z-20 flex items-center text-lg font-medium" />
        {/* Bubbles */}
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
        <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
        <div className="relative z-20 mt-auto">
          <blockquote className="space-y-2">
            <p className="text-lg">
              &ldquo;This library has saved me countless hours of work and
              helped me deliver stunning designs to my clients faster than ever
              before.&rdquo;
            </p>
            <footer className="text-sm">Sofia Davis</footer>
          </blockquote>
        </div>
      </div>
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Welcome to CodeLeap network!
            </h1>
            <p className="text-sm text-muted-foreground">
              Please enter your username
            </p>
          </div>
          <UserAuthForm />
        </div>
      </div>
    </div>
  </>
);

export default App;
