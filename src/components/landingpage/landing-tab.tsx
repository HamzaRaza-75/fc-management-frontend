import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

function LandingTab() {
  return (
    <Tabs
      defaultValue="taskmanagement"
      className="w-full md:px-1 lg:px-2 xl:px-3 "
    >
      <TabsList className="w-full">
        <TabsTrigger value="taskmanagement">Task Management</TabsTrigger>
        <TabsTrigger value="accounts">accounts</TabsTrigger>
        <TabsTrigger value="learners">learners</TabsTrigger>
        <TabsTrigger value="progress">progress</TabsTrigger>
      </TabsList>
      <TabsContent value="taskmanagement">taskmanagement</TabsContent>
      <TabsContent value="accounts">accounts</TabsContent>
      <TabsContent value="learners">learners</TabsContent>
      <TabsContent value="progress">progress</TabsContent>
    </Tabs>
  );
}

export default LandingTab;
