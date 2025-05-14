import { useForm } from '@tanstack/react-form';
import { z } from 'zod';
import { signup } from '@services/authentication';
import { Link, useNavigate } from '@tanstack/react-router';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { FieldInfo } from '@/lib/fieldinfo';
import { useDispatch } from 'react-redux';
import { setAuth } from '@/context/authSlice';

const userSchema = z
  .object({
    name: z.string().min(8, 'Name must be equal to 8 letters '),
    email: z.string().email(),
    password: z.string().min(8, 'Password must be at least 6 characters long'),
    password_confirmation: z.string(),
  })
  .refine((data) => data.password === data.password_confirmation, {
    path: ['password_confirmation'], // This will attach the error to the confirmPassword field
    message: 'Passwords do not match',
  });

export function SignForm({
  className,
  ...props
}: React.ComponentProps<'form'>) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const mutation = useMutation({
    mutationFn: async (data) => {
      return await signup(data);
    },
    onSuccess: (response) => {
      dispatch(setAuth(response.data?.data?.access_token));
      toast.success('You have created your account successfully!');
      navigate({ to: '/' });
    },
    onError: (error: any) => {
      const message =
        error?.response?.data?.message ||
        'Account Creation failed. Please try again.';
      toast.error(message);
    },
  });

  const form = useForm({
    defaultValues: {
      name: '',
      email: '',
      password: '',
      password_confirmation: '',
    },
    validators: { onChange: userSchema },
    onSubmit: ({ value }) => {
      mutation.mutate(value);
    },
  });
  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        await form.handleSubmit();
      }}
      className={cn('flex flex-col gap-6', className)}
      {...props}
    >
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Login to your account</h1>
        <p className="text-muted-foreground text-sm text-balance">
          Enter your email below to login to your account
        </p>
      </div>

      <div className="grid gap-6">
        {/* Name */}
        <div className="grid gap-3">
          <form.Field name="name">
            {(field) => (
              <>
                <Label htmlFor={field.name}>Name</Label>
                <Input
                  id="name"
                  type="text"
                  name={field.name}
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                  placeholder="Name"
                  required
                />
                <span className="text-primary text-xs font-bold">
                  <FieldInfo field={field} />
                </span>
              </>
            )}
          </form.Field>
        </div>

        {/* Email */}
        <div className="grid gap-3">
          <form.Field name="email">
            {(field) => (
              <>
                <Label htmlFor={field.name}>Email</Label>
                <Input
                  id="email"
                  type="email"
                  name={field.name}
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                  placeholder="you@example.com"
                  required
                />
                <span className="text-primary text-xs font-bold">
                  <FieldInfo field={field} />
                </span>
              </>
            )}
          </form.Field>
        </div>

        {/* Password */}
        <div className="grid gap-3">
          <form.Field name="password">
            {(field) => (
              <>
                <Label htmlFor={field.name}>Password</Label>
                <Input
                  id="password"
                  type="password"
                  name={field.name}
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                  placeholder="••••••••"
                  required
                />
                <span className="text-primary text-xs font-bold">
                  <FieldInfo field={field} />
                </span>
              </>
            )}
          </form.Field>
        </div>

        {/* Password */}
        <div className="grid gap-3">
          <form.Field name="password_confirmation">
            {(field) => (
              <>
                <Label htmlFor={field.name}>Confirm Password</Label>
                <Input
                  id="password_confirmation"
                  type="password"
                  name={field.name}
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                  placeholder="••••••••"
                  required
                />
                <span className="text-primary text-xs font-bold">
                  <FieldInfo field={field} />
                </span>
              </>
            )}
          </form.Field>
        </div>

        {/* Submit Button */}
        <form.Subscribe
          selector={(state) => [state.canSubmit, state.isSubmitting]}
        >
          {([canSubmit, isSubmitting]) => (
            <Button
              type="submit"
              disabled={!canSubmit || mutation.isPending}
              className="w-full"
            >
              {isSubmitting || mutation.isPending ? 'Logging in...' : 'Login'}
            </Button>
          )}
        </form.Subscribe>

        {/* Or divider */}
        <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
          <span className="bg-background text-muted-foreground relative z-10 px-2">
            Or continue with
          </span>
        </div>

        {/* GitHub login */}
        <Button variant="outline" className="w-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="h-4 w-4 mr-2"
          >
            <path
              d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385..."
              fill="currentColor"
            />
          </svg>
          Login with GitHub
        </Button>
      </div>

      {/* Footer */}
      <div className="text-center text-sm">
        Already have an account?{' '}
        <Link to="/login" className="underline underline-offset-4">
          Sign up
        </Link>
      </div>
    </form>
  );
}
