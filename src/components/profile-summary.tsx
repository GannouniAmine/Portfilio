import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Database, Globe, Server } from "lucide-react";

export function ProfileSummary() {
  return (
    <Card className="w-full shadow-lg">
      <CardHeader className="flex flex-col items-center text-center space-y-4 pb-4">
        <Avatar className="w-24 h-24 border-4 border-primary">
          <AvatarImage src="https://picsum.photos/seed/student/150/150" alt="Student Name" />
          <AvatarFallback>SN</AvatarFallback>
        </Avatar>
        <div>
          <CardTitle className="text-2xl font-bold text-primary">Your Name Here</CardTitle>
          <p className="text-lg text-muted-foreground">2nd Year Computer Science Student @ ENSI</p>
        </div>
      </CardHeader>
      <CardContent className="text-center space-y-6 pt-4">
        <p className="text-foreground/90 max-w-prose mx-auto">
          Passionate and dedicated computer science student at the National School of Computer Science (ENSI), eager to apply theoretical knowledge to practical projects and gain real-world experience. Seeking opportunities to contribute to innovative software development and learn from experienced professionals.
        </p>
        <div>
          <h3 className="text-xl font-semibold mb-3 text-primary">Key Skills</h3>
          <div className="flex flex-wrap justify-center gap-2">
            <Badge variant="secondary" className="text-sm py-1 px-3">
              <Code className="mr-1 h-4 w-4" /> Java
            </Badge>
            <Badge variant="secondary" className="text-sm py-1 px-3">
              <Code className="mr-1 h-4 w-4" /> Python
            </Badge>
             <Badge variant="secondary" className="text-sm py-1 px-3">
              <Code className="mr-1 h-4 w-4" /> C/C++
            </Badge>
            <Badge variant="secondary" className="text-sm py-1 px-3">
              <Globe className="mr-1 h-4 w-4" /> HTML/CSS
            </Badge>
             <Badge variant="secondary" className="text-sm py-1 px-3">
              <Code className="mr-1 h-4 w-4" /> JavaScript
            </Badge>
             <Badge variant="secondary" className="text-sm py-1 px-3">
              <Server className="mr-1 h-4 w-4" /> SQL
            </Badge>
            <Badge variant="secondary" className="text-sm py-1 px-3">
              <Database className="mr-1 h-4 w-4" /> Git
            </Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
