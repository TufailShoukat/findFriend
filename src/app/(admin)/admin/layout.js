
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Layout({ children }) {
    return (
        <html>
            <body>
                <Tabs defaultValue="dashboard" className="w-full">
                    <TabsList>
                        <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
                        <TabsTrigger value="users">User</TabsTrigger>
                        <TabsTrigger value="events">Events</TabsTrigger>
                        <TabsTrigger value="categories">Categories</TabsTrigger>
                        <TabsTrigger value="subcategories">Subcategories</TabsTrigger>
                    </TabsList>
                    <TabsContent value="dashboard"> {children} </TabsContent>
                    
                    
                </Tabs>
            </body>
        </html>
    );
}
