import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_management/management/tasks')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_management/management/tasks"!</div>
}
