import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mail, MoreVertical, Plus } from "lucide-react";
import { useGetTeams } from "@/service/query/use-get-teams";
import { Skeleton } from "@/components/ui/skeleton";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import AddMemberModal from "@/components/modals/AddMemberModal";

export default function Team() {
    const [query, setQuery] = useState("");
    const [open, setOpen] = useState(false);
    const { data: teamMembers, isLoading, isError, error } = useGetTeams(query);

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-foreground">Team</h1>
                    <p className="text-muted-foreground mt-2">
                        {isLoading ? (
                            <span>Loading...</span>
                        ) : (
                            teamMembers.data.length
                        )}{" "}
                        members in your team
                    </p>
                </div>
                <div className="space-x-5">
                    <Button className="gap-2" onClick={() => setOpen(true)}>
                        <Plus className="h-4 w-4" />
                        Add Member
                    </Button>
                    <Button className="gap-2">
                        <Mail className="h-4 w-4" />
                        Invite Member
                    </Button>
                </div>
            </div>

            <div className="border rounded-md">
                <Input
                    type="text"
                    placeholder="Search Team Member"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {isLoading ? (
                    <div className=" col-span-3 grid grid-cols-2 md:grid-cols-3 gap-10">
                        {Array.from({ length: 6 }).map((_, i) => (
                            <Skeleton
                                key={i}
                                className="h-52 w-96 rounded-xl"
                            />
                        ))}
                    </div>
                ) : isError ? (
                    <>
                        <div className="min-h-72 flex  w-full justify-center items-center col-span-3">
                            <span className="text-red-500">
                                {error.message}
                            </span>
                        </div>
                    </>
                ) : teamMembers.data.length === 0 ? (
                    <>
                        <div className="flex justify-center items-center">
                            <span>No Member Found</span>
                        </div>
                    </>
                ) : (
                    teamMembers.data.map((member) => (
                        <Card
                            key={member.id}
                            className="shadow-sm hover:shadow-md transition-all"
                        >
                            <CardContent className="pt-6">
                                <div className="flex items-start justify-between mb-4">
                                    <Avatar
                                        className={`h-14 w-14 ${member.avatar}`}
                                    >
                                        <AvatarFallback className="text-white text-lg font-semibold">
                                            {member.initials}
                                        </AvatarFallback>
                                    </Avatar>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="h-8 w-8"
                                    >
                                        <MoreVertical className="h-4 w-4" />
                                    </Button>
                                </div>

                                <div className="space-y-3">
                                    <div>
                                        <h3 className="font-semibold text-lg text-foreground">
                                            {member.name}
                                        </h3>
                                        <p className="text-sm text-muted-foreground">
                                            {member.role}
                                        </p>
                                    </div>

                                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                        <Mail className="h-4 w-4" />
                                        <span>{member.email}</span>
                                    </div>

                                    <div className="flex items-center justify-between pt-3 border-t border-border">
                                        <div className="text-sm">
                                            <span className="text-muted-foreground">
                                                Projects:{" "}
                                            </span>
                                            <span className="font-semibold text-foreground">
                                                {member.projects}
                                            </span>
                                        </div>
                                        <Badge
                                            variant="outline"
                                            className="bg-green-100 text-green-700 border-green-200"
                                        >
                                            {member.status}
                                        </Badge>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))
                )}
            </div>

            <AddMemberModal open={open} setOpen={setOpen} />
        </div>
    );
}
