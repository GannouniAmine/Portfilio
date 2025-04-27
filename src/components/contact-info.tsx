import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github } from "lucide-react";

export function ContactInfo() {
  return (
    <Card className="w-full shadow-lg">
      <CardHeader>
        <CardTitle className="text-center text-2xl font-bold text-primary">Get In Touch</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center space-y-4">
        <p className="text-center text-muted-foreground">
          Feel free to reach out for collaborations, opportunities, or just a chat!
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
           <Button variant="default" asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
            <a href="mailto:your.email@ensi.ucar.tn"> {/* Replace with your actual email */}
              <Mail className="mr-2 h-4 w-4" /> Email Me
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer"> {/* Replace with your LinkedIn */}
              <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer"> {/* Replace with your GitHub */}
              <Github className="mr-2 h-4 w-4" /> GitHub
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
