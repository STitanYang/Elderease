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
      id: "1",
      title: "How to Prevent Falls in Elderly at Home",
      excerpt: "How to Prevent Falls in Elderly at Home Falls are one of the leading causes of injury among the elderly...",
      category: "Nutrition",
      image: "/artikel1.jpg",
      date: "May 15, 2023",
      readTime: "6 min read"
    },
    {
      id: "2",
      title: "Effective Communication Strategies for Dementia Patients",
      excerpt: "Dementia can significantly impact a person's ability to communicate, leading to frustration for both the...",
      category: "Fitness",
      image: "/artikel2.jpg",
      date: "April 28, 2023",
      readTime: "5 min read"
    },
    {
      id: "3",
      title: "Tips & Trick - Home Safety Tips for Elderly Living Alone",
      excerpt: "Communicating with someone who has dementia can be challenging. As memory, language, and cognitive...",
      category: "Dementia Care",
      image: "/artikel3.jpg",
      date: "June 10, 2023",
      readTime: "8 min read"
    },
    {
      id: "4",
      title: "Mental Health Support for the Elderly: Combating Loneliness and Depression",
      excerpt: "As people age, they often face life changes such as retirement, health issues, or the loss of loved ones...",
      category: "Safety",
      image: "/artikel4.jpg",
      date: "July 5, 2023",
      readTime: "7 min read"
    },
    {
      id: "5",
      title: "Choosing the Right In-Home Caregiver for Your Aging Parent",
      excerpt: "Finding the right in-home caregiver for your aging parent is a crucial decision. The right match ensures not...",
      category: "Health",
      image: "/artikel5.jpg",
      date: "May 22, 2023",
      readTime: "6 min read"
    },
    {
      id: "6",
      title: "Recognizing Early Signs of Alzheimer’s Disease",
      excerpt: "Alzheimer’s disease is a progressive brain disorder that affects memory, thinking, and behavior. Early detection...",
      category: "Mental Health",
      image: "/artikel6.jpg",
      date: "June 20, 2023",
      readTime: "9 min read"
    },
    {
      id: "7",
      title: "Supporting Elderly Independence While Providing Care",
      excerpt: "As loved ones age, providing care often becomes necessary but maintaining their independence is just as important...",
      category: "Mental Health",
      image: "/artikel7.jpg",
      date: "June 20, 2023",
      readTime: "9 min read"
    }
  ];

  const featuredArticle = articles[0];
  const latestArticles = articles.slice(1, 4);
  const newestArticles = articles.slice(4)

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
              Expert advice and insights on elderly care, health, and wellness to help you provide the best care for your elderly.
            </p>
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
      <section className="py-10 bg-green-50">
        <div className="px-10">
          <h2 className="text-2xl font-bold text-green-700 mb-8">Latest Articles</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newestArticles.map((article) => (
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

      {/* Regular Articles 2*/}
      <section className="py-10 bg-white">
        <div className="px-10">
          <h2 className="text-2xl font-bold text-green-700 mb-8">Recommended Article</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestArticles.map((article) => (
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
    </div>
  );
}