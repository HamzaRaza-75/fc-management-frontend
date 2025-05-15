import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/_management/management/clients/')({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/_management/clients/"!</div>;
}
