import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_management/management/clients/')({
  beforeLoad: () => {},
});
