import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute(
  '/_management/management/client/create',
)({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/_management/management/client/create"!</div>;
}
