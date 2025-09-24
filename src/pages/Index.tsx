import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { UserCheck, BarChart3, Shield, Users, Fingerprint, Camera } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center space-y-6 mb-16">
          <div className="mx-auto h-24 w-24 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-xl">
            <span className="text-3xl font-bold text-primary-foreground">SA</span>
          </div>
          <h1 className="text-5xl font-bold text-foreground mb-4">SmartAttendence</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Revolutionary biometric attendance management system designed for modern educational institutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button asChild size="lg" className="h-12 px-8">
              <Link to="/auth">Get Started</Link>
            </Button>
            <Button variant="outline" size="lg" className="h-12 px-8">
              Learn More
            </Button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Camera className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Facial Recognition</CardTitle>
              <CardDescription>
                Advanced facial recognition technology for contactless attendance marking
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Fingerprint className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Fingerprint Scanning</CardTitle>
              <CardDescription>
                Secure fingerprint authentication with backup PIN/password system
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <UserCheck className="h-6 w-6 text-accent" />
              </div>
              <CardTitle>Real-time Tracking</CardTitle>
              <CardDescription>
                Live attendance monitoring with entry and exit time logging
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <BarChart3 className="h-6 w-6 text-accent" />
              </div>
              <CardTitle>Advanced Analytics</CardTitle>
              <CardDescription>
                Comprehensive reporting with attendance pattern analysis
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Multi-Role Access</CardTitle>
              <CardDescription>
                Role-based dashboards for students, teachers, and administrators
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-accent" />
              </div>
              <CardTitle>Secure & Compliant</CardTitle>
              <CardDescription>
                GDPR/COPPA compliant with encrypted biometric data storage
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="text-center space-y-6">
          <h2 className="text-3xl font-bold text-foreground">Ready to Transform Your School?</h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Join hundreds of educational institutions already using SmartAttendence for accurate, efficient attendance management.
          </p>
          <Button asChild size="lg" className="h-12 px-8">
            <Link to="/auth">Start Free Trial</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
