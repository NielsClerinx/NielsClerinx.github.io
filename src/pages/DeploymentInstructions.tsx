
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const DeploymentInstructions = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-display font-medium text-haircare-dark-brown mb-6">GitHub Pages Deployment Guide</h1>
        
        <Card className="p-6 mb-8">
          <h2 className="text-xl font-medium mb-4">Step 1: Update package.json</h2>
          <p className="mb-4">Add these scripts to your package.json:</p>
          <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
{`"predeploy": "npm run build",
"deploy": "gh-pages -d dist"`}
          </pre>
        </Card>
        
        <Card className="p-6 mb-8">
          <h2 className="text-xl font-medium mb-4">Step 2: Configure GitHub Repository</h2>
          <p className="mb-4">Make sure your code is pushed to a GitHub repository:</p>
          <ol className="list-decimal pl-5 space-y-2">
            <li>Create a new repository on GitHub if you haven't already</li>
            <li>Initialize git in your project: <code className="bg-gray-100 px-2 py-1 rounded">git init</code></li>
            <li>Add your files: <code className="bg-gray-100 px-2 py-1 rounded">git add .</code></li>
            <li>Commit: <code className="bg-gray-100 px-2 py-1 rounded">git commit -m "Initial commit"</code></li>
            <li>Add remote: <code className="bg-gray-100 px-2 py-1 rounded">git remote add origin https://github.com/USERNAME/REPO.git</code></li>
            <li>Push: <code className="bg-gray-100 px-2 py-1 rounded">git push -u origin main</code></li>
          </ol>
        </Card>
        
        <Card className="p-6 mb-8">
          <h2 className="text-xl font-medium mb-4">Step 3: Deploy to GitHub Pages</h2>
          <p className="mb-4">Run the deploy command:</p>
          <pre className="bg-gray-100 p-4 rounded-md mb-4">npm run deploy</pre>
          <p>This will build your project and deploy it to the gh-pages branch of your repository</p>
        </Card>
        
        <Card className="p-6 mb-8">
          <h2 className="text-xl font-medium mb-4">Step 4: Configure GitHub Pages Settings</h2>
          <p className="mb-4">In your GitHub repository:</p>
          <ol className="list-decimal pl-5 space-y-2">
            <li>Go to Settings → Pages</li>
            <li>Select "Deploy from a branch" as the source</li>
            <li>Select "gh-pages" as the branch</li>
            <li>Click Save</li>
          </ol>
          <p className="mt-4">Your site will be available at: <code className="bg-gray-100 px-2 py-1 rounded">https://USERNAME.github.io/REPO</code></p>
        </Card>
        
        <div className="text-center mt-8">
          <Link to="/services">
            <Button className="bg-haircare-gold hover:bg-haircare-gold/90 text-white">
              Return to Services
            </Button>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DeploymentInstructions;
