import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, ArrowRight, Calendar } from "lucide-react";

interface Article {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  image: string;
  date: string;
  readTime: string;
}

export default function ArticlesPage() {
  const articles: Article[] = [
    {
      id: "nutrition-tips-elderly",
      title: "10 Nutrition Tips for Healthy Aging",
      excerpt: "Discover essential nutrition guidelines to help seniors maintain a balanced diet and promote overall health.",
      category: "Nutrition",
      image: "https://images.pexels.com/photos/5531004/pexels-photo-5531004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      date: "May 15, 2023",
      readTime: "6 min read"
    },
    {
      id: "exercise-routines-seniors",
      title: "Safe Exercise Routines for Seniors",
      excerpt: "Explore gentle yet effective exercise routines specially designed for seniors to improve mobility and strength.",
      category: "Fitness",
      image: "https://images.pexels.com/photos/7991662/pexels-photo-7991662.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      date: "April 28, 2023",
      readTime: "5 min read"
    },
    {
      id: "dementia-communication-strategies",
      title: "Effective Communication Strategies for Dementia Patients",
      excerpt: "Learn practical techniques to improve communication with elderly experiencing cognitive decline.",
      category: "Dementia Care",
      image: "https://images.pexels.com/photos/7551622/pexels-photo-7551622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      date: "June 10, 2023",
      readTime: "8 min read"
    },
    {
      id: "fall-prevention-home",
      title: "Creating a Fall-Safe Home Environment",
      excerpt: "Simple modifications to make your home safer and reduce the risk of falls for elderly residents.",
      category: "Safety",
      image: "https://images.pexels.com/photos/7551711/pexels-photo-7551711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      date: "July 5, 2023",
      readTime: "7 min read"
    },
    {
      id: "medication-management-tips",
      title: "Mastering Medication Management for Seniors",
      excerpt: "Practical advice for organizing and tracking medications to prevent errors and improve adherence.",
      category: "Health",
      image: "https://images.pexels.com/photos/7655118/pexels-photo-7655118.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      date: "May 22, 2023",
      readTime: "6 min read"
    },
    {
      id: "mental-health-aging",
      title: "Promoting Mental Wellbeing in Aging Adults",
      excerpt: "Strategies for maintaining cognitive health and emotional wellness throughout the aging process.",
      category: "Mental Health",
      image: "https://images.pexels.com/photos/7551585/pexels-photo-7551585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      date: "June 20, 2023",
      readTime: "9 min read"
    }
  ];

  const featuredArticle = articles[0];
  const regularArticles = articles.slice(1);

  const categories = ["All", "Nutrition", "Fitness", "Dementia Care", "Safety", "Health", "Mental Health"];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-green-50 py-16 md:py-24">
        <div className="px-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-green-700 mb-6">
              Health & Care Articles
            </h1>
            <p className="text-xl text-gray-700">
              Expert advice and insights on elderly care, health, and wellness to help you provide the best care for your loved ones.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 border-b">
        <div className="px-10">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category, i) => (
              <Button 
                key={i} 
                variant={i === 0 ? "default" : "outline"} 
                className={i === 0 ? "bg-green-600 hover:bg-green-700" : "border-green-600 text-green-600 hover:bg-green-50"}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16">
        <div className="px-10">
          <h2 className="text-2xl font-bold text-green-700 mb-8">Featured Article</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-3 relative h-[300px] lg:h-[400px]">
              <Image
                src={featuredArticle.image}
                alt={featuredArticle.title}
                fill
                className="rounded-lg object-cover"
              />
            </div>
            
            <div className="lg:col-span-2 flex flex-col justify-center">
              <Badge className="w-fit mb-4 bg-green-100 text-green-800 hover:bg-green-200">
                {featuredArticle.category}
              </Badge>
              <h3 className="text-3xl font-bold text-green-800 mb-4">{featuredArticle.title}</h3>
              <p className="text-gray-600 mb-4 text-lg">{featuredArticle.excerpt}</p>
              
              <div className="flex items-center text-gray-500 text-sm mb-6">
                <Calendar className="h-4 w-4 mr-1" />
                <span>{featuredArticle.date}</span>
                <span className="mx-2">•</span>
                <span>{featuredArticle.readTime}</span>
              </div>
              
              <Button asChild className="w-fit bg-green-600 hover:bg-green-700">
                <Link href={`/articles/${featuredArticle.id}`}>
                  Read Full Article <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Regular Articles */}
      <section className="py-16 bg-green-50">
        <div className="px-10">
          <h2 className="text-2xl font-bold text-green-700 mb-8">Latest Articles</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularArticles.map((article) => (
              <Card key={article.id} className="overflow-hidden border-green-100 bg-white">
                <div className="relative h-48">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover"
                  />
                </div>
                
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-center mb-2">
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-200">
                      {article.category}
                    </Badge>
                    <div className="text-gray-500 text-sm flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      <span>{article.date}</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl">{article.title}</CardTitle>
                </CardHeader>
                
                <CardContent>
                  <CardDescription className="line-clamp-3">{article.excerpt}</CardDescription>
                </CardContent>
                
                <CardFooter className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">{article.readTime}</span>
                  <Button asChild variant="ghost" className="text-green-600 hover:text-green-700 hover:bg-green-50 p-0">
                    <Link href={`/articles/${article.id}`}>
                      Read More <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16">
        <div className="px-10">
          <div className="bg-white border border-green-100 rounded-xl p-8 md:p-12 max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-green-700 mb-4">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-gray-600 mb-6">
              Get the latest articles, tips, and resources delivered directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Input 
                placeholder="Your email address" 
                className="border-green-600/50 focus-visible:ring-green-600"
              />
              <Button className="bg-green-600 hover:bg-green-700 whitespace-nowrap">
                Subscribe Now
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}