import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Plus, MoreVertical, Calendar, Users } from "lucide-react";

const projects = [
  {
    id: 1,
    name: "Mobile App Redesign",
    description: "Complete overhaul of the mobile user experience",
    status: "In Progress",
    priority: "High",
    deadline: "Mar 15, 2024",
    team: 5,
    tasks: { completed: 24, total: 32 },
  },
  {
    id: 2,
    name: "API Migration",
    description: "Migrate legacy APIs to new infrastructure",
    status: "Planning",
    priority: "Medium",
    deadline: "Apr 30, 2024",
    team: 3,
    tasks: { completed: 5, total: 28 },
  },
  {
    id: 3,
    name: "Website Refresh",
    description: "Update landing page and marketing site",
    status: "In Progress",
    priority: "High",
    deadline: "Mar 25, 2024",
    team: 4,
    tasks: { completed: 18, total: 30 },
  },
  {
    id: 4,
    name: "Analytics Dashboard",
    description: "Build comprehensive analytics and reporting",
    status: "Review",
    priority: "Low",
    deadline: "Mar 10, 2024",
    team: 2,
    tasks: { completed: 22, total: 25 },
  },
  {
    id: 5,
    name: "Security Audit",
    description: "Complete security review and implementation",
    status: "Planning",
    priority: "High",
    deadline: "May 15, 2024",
    team: 6,
    tasks: { completed: 2, total: 45 },
  },
  {
    id: 6,
    name: "Documentation Update",
    description: "Refresh all technical and user documentation",
    status: "In Progress",
    priority: "Medium",
    deadline: "Apr 5, 2024",
    team: 2,
    tasks: { completed: 12, total: 20 },
  },
];

const statusColors = {
  "In Progress": "bg-primary/10 text-primary border-primary/20",
  "Planning": "bg-accent/10 text-accent border-accent/20",
  "Review": "bg-green-100 text-green-700 border-green-200",
};

const priorityColors = {
  "High": "bg-red-100 text-red-700 border-red-200",
  "Medium": "bg-yellow-100 text-yellow-700 border-yellow-200",
  "Low": "bg-gray-100 text-gray-700 border-gray-200",
};

export default function Projects() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Projects</h1>
          <p className="text-muted-foreground mt-2">
            Manage and track all your team projects
          </p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          New Project
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Card key={project.id} className="shadow-sm hover:shadow-md transition-all">
            <CardHeader>
              <div className="flex items-start justify-between">
                <CardTitle className="text-lg">{project.name}</CardTitle>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <MoreVertical className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                {project.description}
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className={statusColors[project.status as keyof typeof statusColors]}>
                  {project.status}
                </Badge>
                <Badge variant="outline" className={priorityColors[project.priority as keyof typeof priorityColors]}>
                  {project.priority}
                </Badge>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Progress</span>
                  <span className="font-medium text-foreground">
                    {project.tasks.completed}/{project.tasks.total}
                  </span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div
                    className="bg-primary h-2 rounded-full transition-all"
                    style={{
                      width: `${(project.tasks.completed / project.tasks.total) * 100}%`,
                    }}
                  />
                </div>
              </div>

              <div className="flex items-center justify-between text-sm pt-2 border-t border-border">
                <div className="flex items-center gap-1 text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>{project.deadline}</span>
                </div>
                <div className="flex items-center gap-1 text-muted-foreground">
                  <Users className="h-4 w-4" />
                  <span>{project.team}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
