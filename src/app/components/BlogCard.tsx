import Image from 'next/image';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

interface BlogCardProps {
  image: string;
  title: string;
  description: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ image, title, description }) => {
  return (
    <Card className="hover:shadow-lg transition duration-300 ease-in-out">
      <CardHeader>
        <Image src={image} alt={title} width={400} height={250} className="rounded-md object-cover" />
      </CardHeader>
      <CardContent>
        <CardTitle className="text-lg font-semibold">{title}</CardTitle>
        <CardDescription className="text-sm text-gray-500">{description}</CardDescription>
      </CardContent>
    </Card>
  );
};

export default BlogCard;
