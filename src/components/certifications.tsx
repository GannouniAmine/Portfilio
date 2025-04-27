import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award } from "lucide-react"; // Using Award icon for certifications

// Sample certification data (replace with actual data)
// Consider fetching this data from an API or a dedicated data file later
const certifications = [
  { name: "AWS Certified Cloud Practitioner (Conceptual)", issuer: "AWS", icon: <Award className="mr-1.5 h-4 w-4" /> },
  { name: "Google IT Support Professional Certificate (Conceptual)", issuer: "Google/Coursera", icon: <Award className="mr-1.5 h-4 w-4" /> },
  { name: "Introduction to Cybersecurity (Conceptual)", issuer: "Cisco", icon: <Award className="mr-1.5 h-4 w-4" /> },
  // Add more actual or planned certifications here
];

export function Certifications() {
  return (
    <Card className="w-full shadow-lg rounded-lg overflow-hidden">
      <CardHeader className="bg-primary/5 pb-4 pt-6">
        <CardTitle className="text-2xl md:text-3xl font-bold text-primary text-center">Certifications & Achievements</CardTitle>
      </CardHeader>
      <CardContent className="p-6 md:p-8">
        {certifications.length > 0 ? (
          <div className="flex flex-wrap justify-center gap-3">
            {certifications.map((cert) => (
              <Badge
                key={cert.name}
                variant="outline"
                className="text-sm py-1.5 px-4 rounded-full border-primary/30 text-primary flex items-center shadow-sm hover:bg-primary/10 transition-colors cursor-default"
                title={`Issuer: ${cert.issuer}`} // Tooltip for issuer info
              >
                {cert.icon}
                <span>{cert.name}</span>
              </Badge>
            ))}
          </div>
        ) : (
          <p className="text-muted-foreground text-center">No certifications listed yet. Currently working on expanding my credentials!</p>
        )}
        {/* Optional: Add a note about future certifications */}
        {/* <p className="text-center text-muted-foreground text-sm mt-6">
          Actively pursuing certifications in [Area 1] and [Area 2].
        </p> */}
      </CardContent>
    </Card>
  );
}
