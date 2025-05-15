import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/_management/management/companies/')({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/_management/management/companies/"!</div>;
}
