import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_management/management/team/create')({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/_management/management/team/create"!</div>;
}
