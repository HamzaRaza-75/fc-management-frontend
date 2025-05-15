import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/_management/management/users/')({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/_management/management/users/"!</div>;
}
