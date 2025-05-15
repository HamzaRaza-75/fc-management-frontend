import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/_management/management/')({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/_management/management/"!</div>;
}
