import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Database, Globe, Server, Component, BrainCircuit, Braces } from "lucide-react"; // Added Component, BrainCircuit, Braces icons

export function ProfileSummary() {
  return (
    <Card className="w-full shadow-lg rounded-lg overflow-hidden">
      <CardHeader className="flex flex-col items-center text-center space-y-4 pb-4 bg-gradient-to-b from-primary/10 to-background pt-6">
        <Avatar className="w-28 h-28 border-4 border-primary shadow-md">
          {/* Placeholder image, replace with actual photo URL if available */}
          <AvatarImage src="https://picsum.photos/seed/magannouni/200/200" alt="Mohamed Amine Gannouni" />
          <AvatarFallback className="text-3xl font-semibold bg-primary text-primary-foreground">MAG</AvatarFallback>
        </Avatar>
        <div>
          <CardTitle className="text-3xl font-bold text-primary">Mohamed Amine Gannouni</CardTitle>
          <p className="text-lg text-muted-foreground mt-1">2nd Year Computer Science Student @ ENSI</p>
        </div>
      </CardHeader>
      <CardContent className="text-center space-y-8 pt-6 px-4 md:px-6 pb-8">
        <p className="text-foreground/90 max-w-prose mx-auto text-base md:text-lg leading-relaxed">
          Passionate and dedicated computer science student at the National School of Computer Science (ENSI), eager to apply theoretical knowledge to practical projects and gain real-world experience. Seeking opportunities to contribute to innovative software development and learn from experienced professionals. Adaptable, collaborative, and always keen to tackle new challenges.
        </p>
        <div>
          <h3 className="text-xl font-semibold mb-4 text-primary">Key Skills</h3>
          {/* Updated skills based on projects */}
          <div className="flex flex-wrap justify-center gap-2">
            <Badge variant="secondary" className="text-sm py-1 px-3 rounded-full shadow-sm">
              <Code className="mr-1 h-4 w-4" /> Java
            </Badge>
            <Badge variant="secondary" className="text-sm py-1 px-3 rounded-full shadow-sm">
              <Code className="mr-1 h-4 w-4" /> Python
            </Badge>
             <Badge variant="secondary" className="text-sm py-1 px-3 rounded-full shadow-sm">
              <Code className="mr-1 h-4 w-4" /> C/C++
            </Badge>
             <Badge variant="secondary" className="text-sm py-1 px-3 rounded-full shadow-sm">
              <Braces className="mr-1 h-4 w-4" /> JavaScript / TypeScript
            </Badge>
            <Badge variant="secondary" className="text-sm py-1 px-3 rounded-full shadow-sm">
              <Component className="mr-1 h-4 w-4" /> React / Next.js
            </Badge>
             <Badge variant="secondary" className="text-sm py-1 px-3 rounded-full shadow-sm">
              <Globe className="mr-1 h-4 w-4" /> HTML / CSS
            </Badge>
            <Badge variant="secondary" className="text-sm py-1 px-3 rounded-full shadow-sm">
              <Server className="mr-1 h-4 w-4" /> PHP
            </Badge>
            {/* Removed Django Badge */}
            <Badge variant="secondary" className="text-sm py-1 px-3 rounded-full shadow-sm">
              <Database className="mr-1 h-4 w-4" /> SQL
            </Badge>
            {/* Removed AI/ML Badge */}
            <Badge variant="secondary" className="text-sm py-1 px-3 rounded-full shadow-sm">
              <Database className="mr-1 h-4 w-4" /> Git & GitHub
            </Badge>
            {/* Removed Data Structures & Algorithms Badge */}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
