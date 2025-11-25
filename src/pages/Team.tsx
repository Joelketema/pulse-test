import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mail, MoreVertical } from "lucide-react";

const teamMembers = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Product Manager",
    email: "sarah.j@company.com",
    initials: "SJ",
    projects: 8,
    status: "Active",
    avatar: "bg-primary",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Lead Developer",
    email: "michael.c@company.com",
    initials: "MC",
    projects: 12,
    status: "Active",
    avatar: "bg-accent",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "UX Designer",
    email: "emily.r@company.com",
    initials: "ER",
    projects: 6,
    status: "Active",
    avatar: "bg-green-600",
  },
  {
    id: 4,
    name: "David Kim",
    role: "Backend Developer",
    email: "david.k@company.com",
    initials: "DK",
    projects: 10,
    status: "Active",
    avatar: "bg-orange-600",
  },
  {
    id: 5,
    name: "Lisa Anderson",
    role: "QA Engineer",
    email: "lisa.a@company.com",
    initials: "LA",
    projects: 9,
    status: "Active",
    avatar: "bg-purple-600",
  },
  {
    id: 6,
    name: "James Wilson",
    role: "Frontend Developer",
    email: "james.w@company.com",
    initials: "JW",
    projects: 7,
    status: "Active",
    avatar: "bg-blue-600",
  },
  {
    id: 7,
    name: "Maria Garcia",
    role: "Product Designer",
    email: "maria.g@company.com",
    initials: "MG",
    projects: 5,
    status: "Active",
    avatar: "bg-pink-600",
  },
  {
    id: 8,
    name: "Thomas Brown",
    role: "DevOps Engineer",
    email: "thomas.b@company.com",
    initials: "TB",
    projects: 11,
    status: "Active",
    avatar: "bg-indigo-600",
  },
];

export default function Team() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Team</h1>
          <p className="text-muted-foreground mt-2">
            {teamMembers.length} members in your team
          </p>
        </div>
        <Button className="gap-2">
          <Mail className="h-4 w-4" />
          Invite Member
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {teamMembers.map((member) => (
          <Card key={member.id} className="shadow-sm hover:shadow-md transition-all">
            <CardContent className="pt-6">
              <div className="flex items-start justify-between mb-4">
                <Avatar className={`h-14 w-14 ${member.avatar}`}>
                  <AvatarFallback className="text-white text-lg font-semibold">
                    {member.initials}
                  </AvatarFallback>
                </Avatar>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <MoreVertical className="h-4 w-4" />
                </Button>
              </div>

              <div className="space-y-3">
                <div>
                  <h3 className="font-semibold text-lg text-foreground">
                    {member.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </div>

                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Mail className="h-4 w-4" />
                  <span>{member.email}</span>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-border">
                  <div className="text-sm">
                    <span className="text-muted-foreground">Projects: </span>
                    <span className="font-semibold text-foreground">
                      {member.projects}
                    </span>
                  </div>
                  <Badge variant="outline" className="bg-green-100 text-green-700 border-green-200">
                    {member.status}
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
